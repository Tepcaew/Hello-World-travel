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
    <div>
      {tours.map((tour) => {
        return tourId.map((item) => {
          if (item.tour === tour._id) {
            console.log(item);

            return (
              <div className={styles.myTour}>
                <div>{tour.name}</div>
                <div>{item.date}</div>
                {item.confirmed ? (
                  <div>Подтверждено</div>
                ) : (
                  <div>Ожидает подтверждения</div>
                )}
              </div>
            );
          }
        });
      })}
    </div>
  );
};

export default MyTours;
