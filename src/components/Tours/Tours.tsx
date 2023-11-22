import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tour from "./Tour";
import { getTours } from "../../features/toursSlice";
import styles from "./Tours.module.css";

const Tours = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);
  
  console.log(tours)
  return (
    <div className={styles.toursContainer}>
      
      {tours.map((tour) => {
        
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
    
  );
};

export default Tours;
