import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/applicationSlice";
import styles from "./Tours.module.css";

const BookedTour = () => {
  const users = useSelector((state) => state.application.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className={styles.bookToursContainer}>
      <table className={styles.table}>
        <tr className={styles.headRaw}>
          <th className={styles.clientConfirm}>Клиент</th>
          <th className={styles.tourConfirm}>Тур</th>
          <th className={styles.datesConfirm}>Даты</th>
          <th className={styles.statusConfirm}>Статус</th>
        </tr>
      </table>
      {users.map((user) => {
        return user.tours.map((tour) => {
          return (
            <table className={styles.table}>
              {tour.confirmed && (
                <tr className={styles.bookTourRaw}>
                  <td className={styles.clientConfirm}>{user.login}</td>
                  <td className={styles.tourConfirm}>{tour.tour.name}</td>
                  <td className={styles.datesConfirm}>{tour.date}</td>
                  <td className={styles.statusConfirm}>Подтверждено</td>
                </tr>
              )}
            </table>
          );
        });
      })}
    </div>
  );
};

export default BookedTour;
