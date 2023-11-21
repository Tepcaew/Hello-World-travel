import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../features/excursionSlice";
import Excursion from "./Excursion";
import styles from "./Excursions.module.css";

const Excursions = () => {
  const excursions = useSelector((state) => state.excursion.excursion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExcursion());
  }, [dispatch]);

  return (
    <div className={styles.toursContainer}>
      {excursions.map((excursion) => {
        return (
          <Excursion
            key={excursion._id}
            id={excursion._id}
            name={excursion.name}
            descr={excursion.descr}
            image={excursion.image}
            price={excursion.price}
            rating={excursion.rating}
          />
        );
      })}
    </div>
  );
};

export default Excursions;
