import React from "react";
import styles from "./Tours.module.css";
import { Link } from "react-router-dom";

const Tour = ({ name, descr, rating, price, image, id }) => {

  return (
      <Link to={`/tours/${id}`} className={styles.tourCard}>
        <img
          className={styles.tourImage}
          src={`http://localhost:3077/${image}`}
          alt=""
        />
        <div className={styles.tourText}>
          <h2 className={styles.tourName}>{name}</h2>
          <div className={styles.tourDescr}>{descr}</div>
          <div className={styles.tourPriceAndRating}>
            <div className={styles.tourPrice}>Цена: {price} рублей</div>
            <div className={styles.tourRating}>{rating} ⭐</div>
          </div>
        </div>
      </Link>
  );
};

export default Tour;
