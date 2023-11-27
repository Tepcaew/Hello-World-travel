import React, { useState } from "react";
import styles from "./Contacts.module.css";
import { YMaps, Map } from "react-yandex-maps";
import whatsApp from "../../assets/whats.png";
import telegramm from "../../assets/telegramm.png";
import facebook from "../../assets/facebook.png";
import ReservationTour from "./Reservation/ReservationTour";

const Contacts = () => {
 

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.textEthno}>
        <p>HELLO WORLD</p>
        <br />
        <h1>Свяжитесь с нами</h1>
      </div>
      <div className={styles.title}>
        <div className={styles.titleContent}>
          <h2>Офис в Грозном</h2>
          <br />
          <p>8989 912 89 89</p>
          <p>hello.grozny@world.ru</p>
          <p>Офис работает с 10:00 до 18:00, Выходной - Воскресенье</p>
          <p>Чеченская Республика, г. Грозный , Трошева 7</p>
          <div className={styles.Icon}>
            <a href="#">
              <img src={whatsApp} alt="" />
            </a>
            <a href="#">
              <img src={telegramm} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.contactsMainBlock}>
          <YMaps className={styles.map}>
            <Map
              className={styles.Map}
              defaultState={{
                center: [43.324675, 45.692376],
                zoom: 17,
              }}
            />
          </YMaps>
        </div>
      </div>
      <div className={styles.titleTwo}>
        <div className={styles.titleContent}>
          <h2>Офис в Дербенте</h2>
          <br />
          <p>+7 928 593 81 81</p>
          <p>hello.derbent@world.ru</p>
          <p>
            Офис работает с 10:00 до 17:00, Обед 12:00 - 13:00. Выходной -
            Воскресенье
          </p>
          <p>Республика Дагестан, г. Дербент , Гагарина 16/1</p>
          <div className={styles.Icon}>
            <a href="#">
              <img src={whatsApp} alt="" />
            </a>
            <a href="#">
              <img src={telegramm} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.contactsMainBlock}>

          <YMaps className={styles.map}>
            <Map
              className={styles.Map}
              defaultState={{
                center: [42.064022, 48.289145],
                zoom: 17,
              }}
            />
          </YMaps>
        </div>
      </div>
      <ReservationTour/>
    </div>
  );
};

export default Contacts;
