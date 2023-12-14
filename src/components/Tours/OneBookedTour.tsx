import React from "react";
import styles from "./Tours.module.css";


const OneBookedTour = ({ name, tour, date }) => {
  return (
    <tr className={styles.bookTourRaw}>
      <td className={styles.clientConfirm}>{name}</td>
      <td className={styles.tourConfirm}>{tour}</td>
      <td className={styles.datesConfirm}>{date}</td>
      <td className={styles.statusConfirm}>Подтверждено</td>
    </tr>
  );
};

export default OneBookedTour;
