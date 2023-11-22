import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../../features/excursionSlice";
import { Link } from "react-router-dom";
import styles from "../Carts/Carts.module.css"

const Carts = () => {
  const excursions = useSelector((state) => state.excursion.excursion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExcursion());
  }, [dispatch]);

  return (
    <div className={styles.mainCart}>
      <div className={styles.title}>
       <b>ETNO TREVEL</b>
       <p>Этнотревел организовывает экскурсии с выездом из трех городов Дагестана. Выберите выезд и возвращение в удобный для Вас город.</p>
      </div>
      <h1 className={styles.oraut}>выезд из коспийска</h1>
      <div className={styles.containerCart}> 
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
      <div className={styles.cart}>
         <p>сулакский каньон с водопадами</p>
      </div>
         <div className={styles.btn}>
         <p >Выезд на экскурсии осуществляется из обоих городов. Наша машина приедет к точке сбора в Махачкале или Каспийске. Подробнее о месте сбора и времени выезда можно узнать в каждой экскурсии.</p>
         <button >смотреть все экскурсии из махачкалы</button>

         </div>
       </div>


      {excursions.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p>{item.descr}</p>
            <p>{item.price}</p>
            <p>оценка: {item.rating}</p>
            <img src={`http://localhost:3077/${item.image}`} alt="" />
            <button>
              <Link to={`/excursion/${item._id}`}>Подробнее</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Carts;
