import React from "react";
import styles from "./Tours.module.css";
import { Link } from "react-router-dom";

const TourCard = ({ name, image, id }) => {
  return (
    <Link to={`/tours/${id}`} className={styles.tourCards}>
      <img
        className={styles.tourImage}
        src={`http://localhost:3077/${image}`}
        alt=""
      />

      <h2 className={styles.tourName}>{name}</h2>
    </Link>
  );
};

export default TourCard;
