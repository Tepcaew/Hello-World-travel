import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/applicationSlice";
import styles from "./Tours.module.css";

const BookingTour = () => {
  const users = useSelector((state) => state.application.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className={styles.bookToursContainer}>
      <table className={styles.table}>
        <tr className={styles.headRaw}>
          <th className={styles.client}>Клиент</th>
          <th className={styles.tour}>Тур</th>
          <th className={styles.dates}>Даты</th>
          <th className={styles.status}>Статус</th>
          <th className={styles.confirm}>Подтвердить</th>
        </tr>
      </table>
      {users.map((user) => {
        return user.tours.map((tour) => {
          return (
            <table className={styles.table}>
              {!tour.confirmed && (
                <tr className={styles.bookTourRaw}>
                  <td className={styles.client}>{user.login}</td>
                  <td className={styles.tour}>{tour.tour.name}</td>
                  <td className={styles.dates}>{tour.date}</td>
                  <td className={styles.status}>Ожидает подтверждения</td>
                  <td className={styles.confirm}><button>+</button></td>
                </tr>
              )}
            </table>
          );
        });
      })}
    </div>
  );
};

export default BookingTour;
