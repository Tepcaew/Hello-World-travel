import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOneTour, getTours } from "../../features/toursSlice";
import { useParams } from "react-router-dom";
import styles from "./Tours.module.css";

const OneTour = () => {

    const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);

const {id} = useParams()
const oneTour = tours?.find((tour) => tour._id === id)

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

    return (
        <div className={styles.oneTour} key={oneTour?._id}>
            <img
          className={styles.tourImage}
          src={`http://localhost:3077/${oneTour?.image}`}
          alt=""
        />
        <div className={styles.tourText}>
          <h2 className={styles.tourName}>{oneTour?.name}</h2>
          <div className={styles.tourDescr}>{oneTour?.descr}</div>
          <div className={styles.tourPriceAndRating}>
            <div className={styles.tourPrice}>Цена: {oneTour?.price} рублей</div>
            <div className={styles.tourRating}>{oneTour?.rating} ⭐</div>
          </div>
        </div>
            
        </div>
    );
};

export default OneTour;