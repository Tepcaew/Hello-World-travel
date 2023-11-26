import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../features/toursSlice";
import styles from "./Tours.module.css";

const MyTours = () => {
  const tours = useSelector((state) => state.tours.tours);
  const dispatch = useDispatch();
  const tourId = useSelector((state) => state.application.user.tours);
  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <div className={styles.bookToursContainer}>
      <table className={styles.table}>
        <tr className={styles.headRaw}>
          <th className={styles.myTour}>Тур</th>
          <th className={styles.myDates}>Даты</th>
          <th className={styles.myStatus}>Статус</th>
        </tr>
      </table>
      {tours.map((tour) => {
        return tourId.map((item) => {
          if (item.tour._id === tour._id) {
            return (
              <table className={styles.table}>
                <tr className={styles.bookTourRaw}>
                  <td className={styles.myTour}>{item.tour.name}</td>
                  <td className={styles.myDates}>{item.date}</td>
                  <td className={styles.myStatus}>
                    {item.confirmed ? (
                      <div>Подтверждено</div>
                    ) : (
                      <div>Ожидает подтверждения</div>
                    )}
                  </td>
                </tr>
              </table>
            );
          }
        });
      })}
    </div>
  );
};

export default MyTours;
