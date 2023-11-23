import React from "react";
import { Link } from "react-router-dom";
import styles from "../Body/Excursions.module.css";

const Excursion = ({ name, descr, rating, price, image, id }) => {
  return (
    <Link to={`excursion/${id}`} className={styles.excursionCard}>
      <img
        className={styles.excursionImage}
        src={`http://localhost:3077/${image}`}
        alt=""
      />
      <div className={styles.excursionText}>
        <h2 className={styles.excursionName}>{name}</h2>
        <div className={styles.excursionDescr}>{descr}</div>
        
        <div className={styles.excursionPriceAndRating}>
          <div className={styles.excursionPrice}>Цена: {price} рублей</div>
          <div className={styles.excursionRating}>{rating} ⭐</div>
        </div>
      </div>
    </Link>
  );
};

export default Excursion;
