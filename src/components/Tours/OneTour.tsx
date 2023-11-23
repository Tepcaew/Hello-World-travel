import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../features/toursSlice";
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
  console.log(oneTour);
  return (
    <>
      <img
        className={styles.video}
        src={`http://localhost:3077/${oneTour?.image}`}
        alt=""
      />
      <div className={styles.oneTour} key={oneTour?._id}>
        <div className={styles.oneTourHead}>
          <iframe
            className={styles.oneTourImage}
            src={`https://www.youtube.com/embed/${oneTour?.video}?autoplay=1&mute=0`}
            name="youtube embed"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder={0}
          ></iframe>
          <div className={styles.oneTourText}>
            <h2 className={styles.oneTourName}>{oneTour?.name} </h2>
            <div className={styles.oneTourDescr}>{oneTour?.descr}</div>
            <div className={styles.oneTourTransport}>{oneTour?.transport}</div>
            <div className={styles.oneTourLength}>
              Продолжительность: {oneTour?.length} дня
            </div>
            <div className={styles.oneTourPriceAndRating}>
              <div className={styles.oneTourPrice}>
                Цена: {oneTour?.price} рублей / 1 человек
              </div>
              <div className={styles.oneTourRating}>
                Оценка тура: {oneTour?.rating} ⭐
              </div>
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
    </>
  );
};

export default OneTour;
