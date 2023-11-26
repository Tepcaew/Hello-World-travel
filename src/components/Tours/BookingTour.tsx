import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/applicationSlice";
import styles from "./Tours.module.css";
import OneBookingTour from "./OneBookingTour";

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
          console.log(tour);
          
          return (
            <table className={styles.table}>
              {!tour.confirmed && 
                <OneBookingTour
                  id={user._id}
                  name={user.login}
                  broneId={tour._id}
                  tour={tour.tour.name}
                  date={tour.date}
                  tourId={tour.tour._id}
                />
              }
            </table>
          );
        });
      })}
    </div>
  );
};

export default BookingTour;
