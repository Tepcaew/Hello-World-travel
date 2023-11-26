import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./BroneTour.module.css";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addTours } from "../../features/applicationSlice";

const BroneTour = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const tour = useSelector((state) => state.justReducer.broneTour);
  const id = useSelector((state) => state.application.user._id);
  const oneTour = tours?.find((item) => item._id === tour);

  const [dates, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const date = [startDate, endDate];
  
  const handleAddTour = () => {
    dispatch(addTours({ id, date, tour }));
  };
console.log(id, date, tour);

  return (
    <div className={styles.brone}>
      <div className={styles.broneText}>
        <h3>1. Прекрасный выбор!</h3>
        <div className={styles.tour}>
          <h1 className={styles.tourName}>{oneTour?.name}</h1>
          <img
            className={styles.tourImage}
            src={`http://localhost:3077/${oneTour?.image}`}
            alt=""
          />
        </div>
      </div>
      <div>
        <h3>2. Теперь выберите даты:</h3>
        <DatePicker
          className={styles.date}
          selected={dates}
          onChange={handleChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
        />
      </div>
      <div>
        <h3>3. Последний шаг</h3>
        <button onClick={handleAddTour}>Отправить на подтверждение</button>
      </div>
    </div>
  );
};

export default BroneTour;
