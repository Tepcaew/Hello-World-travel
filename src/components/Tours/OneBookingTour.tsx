import React from "react";
import styles from "./Tours.module.css";
import { confirmTour } from "../../features/applicationSlice";
import { useDispatch } from "react-redux";

const OneBookingTour = ({ id, name, tour, date, broneId, tourId }) => {
  const dispatch = useDispatch();
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(confirmTour({ id, broneId, date, tourId }));
  };
  return (
    <tr className={styles.bookTourRaw}>
      <td className={styles.client}>{name}</td>
      <td className={styles.tour}>{tour}</td>
      <td className={styles.dates}>{date}</td>
      <td className={styles.status}>Ожидает подтверждения</td>
      <td className={styles.confirm}>
        <button onClick={handleConfirm}>+</button>
      </td>
    </tr>
  );
};

export default OneBookingTour;
