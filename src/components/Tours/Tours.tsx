import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tour from "./Tour";
import { getTours } from "../../features/toursSlice";
import styles from "./Tours.module.css";
import Categories from "../Categories/Categories";
import { useParams } from "react-router-dom";

const Tours = () => {
  const tours = useSelector((state) => state.tours.tours);
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const tourFilter = tours.filter((tour) => {
    if (!categoryId) return true;
    return tour.categoryName._id === categoryId;
  });
  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <>
      <Categories />
      <div className={styles.toursContainer}>
        {tourFilter.map((tour) => {
          return (
            <Tour
              key={tour._id}
              id={tour._id}
              name={tour.name}
              regionName={tour.regionName}
              descr={tour.descr}
              image={tour.image}
              price={tour.price}
              categoryName={tour.categoryName}
              rating={tour.rating}
              firstDay={tour.firstDay}
              firstDayDescr={tour.firstDayDescr}
              secondDay={tour.secondDay}
              secondDayDescr={tour.secondDayDescr}
              thirdDay={tour.thirdDay}
              thirdDayDescr={tour.thirdDayDescr}
              transport={tour.transport}
              length={tour.length}
            />
          );
        })}
      </div>
    </>
  );
};

export default Tours;
