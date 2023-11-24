import React, { useEffect } from "react";
import styles from "../Body/body.module.css";
import Guides from "../guides/Guides";
import { useDispatch, useSelector } from "react-redux";
import TourCard from "../Tours/TourCard";
import { getTours } from "../../features/toursSlice";

const Body = () => {
  const tours = useSelector((state) => state.tours.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.text1}>
        <p className={styles.p1}>Туры по России</p>
        <p className={styles.p2}>с Hello, World!</p>
      </div>
      <div className={styles.text2}>
        <p>
          Трёхдневные авторские туры из Грозного для групп и подбор
          индивидуальных маршрутов - испытайте новые впечатления от пешего
          похода, сплава на байдарках или поездки по холмам на джипах.
        </p>
      </div>
        <h2 className={styles.text3}>Список туров на 2023 год</h2>
      <div className={styles.cardsContainer} >
      {tours.map((tour) => {
        return (
            <TourCard key={tour._id} name={tour.name} image={tour.image} id={tour._id}/>
        );
      })}
          </div>

      <div className={styles.contInfo}>
        <div className={styles.contTextInfo}>
          <div className={styles.textInfo1}>Наша команда гидов-экскурсоводов</div>
          <div className={styles.textInfo2}>
            На фотографиях ниже — люди, которые создали семью EtnoTrvel. Они
            ответят на все вопросы и помогут с организацией тура. Все гиды в
            нашей команде – профессиональные путешественники с многолетним
            опытом.
          </div>
        </div>
      </div>
      <Guides />
    </div>
  );
};

export default Body;
