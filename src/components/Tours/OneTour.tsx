import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneTour, getTours } from "../../features/toursSlice";
import { useParams } from "react-router-dom";
import styles from "./Tours.module.css";

const OneTour = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);

  const { id } = useParams();
  const oneTour = tours?.find((tour) => tour._id === id);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <div className={styles.oneTour} key={oneTour?._id}>
      <h2 className={styles.tourName}>{oneTour?.name}</h2>
      <img
        className={styles.tourImage}
        src={`http://localhost:3077/${oneTour?.image}`}
        alt=""
      />
      <div className={styles.tourText}>
        <div className={styles.tourDescr}>{oneTour?.descr}</div>
        <div className={styles.tourDescr}>{oneTour?.transport}</div>
        <div className={styles.tourDescr}>
          Продолжительность: {oneTour?.length} дня
        </div>
        <div className={styles.tourPriceAndRating}>
          <div className={styles.tourPrice}>
            Цена: {oneTour?.price} рублей / 1 человек
          </div>
          <div className={styles.tourRating}>
            Оценка тура: {oneTour?.rating} ⭐
          </div>
        </div>
      </div>
      <h1>Программа тура</h1>
      <ul>
        <li>
          <h2>1 День</h2>
          {oneTour?.firstDay}
        </li>
        <li>
          <h2>2 День</h2>
          {oneTour?.secondDay}
        </li>
        <li>
          <h2>3 День</h2>
          {oneTour?.thirdDay}
        </li>
      </ul>
      <h1>Расписание по дням</h1>
      <div className={styles.oneTourDay}>
        <div className={styles.oneTourDayText}>
          <h2>1 День</h2>
          {oneTour?.firstDayDescr}
        </div>
        <img
          className={styles.oneTourDayImage}
          src={`http://localhost:3077/${oneTour?.firstDayImg}`}
          alt=""
        />
      </div>
      <div className={styles.oneTourDay}>
        <img
          className={styles.oneTourDayImage}
          src={`http://localhost:3077/${oneTour?.secondDayImg}`}
          alt=""
        />
        <div className={styles.oneTourDayText}>
          <h2>2 День</h2>
          {oneTour?.secondDayDescr}
        </div>
      </div>
      <div className={styles.oneTourDay}>
        <div className={styles.oneTourDayText}>
          <h2>3 День</h2>
          {oneTour?.thirdDayDescr}
        </div>
        <img
          className={styles.oneTourDayImage}
          src={`http://localhost:3077/${oneTour?.thirdDayImg}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default OneTour;
