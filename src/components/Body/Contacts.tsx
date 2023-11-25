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
        <p>ETHNO TRAVEL</p>
        <br />
        <h1>Свяжитесь с нами</h1>
      </div>
      <div className={styles.title}>
        <div className={styles.titleContent}>
          <h2>Офис в Грозном</h2>
          <br />
          <p>8989 912 89 89</p>
          <p>ethnotravel@marwa.ru</p>
          <p>Офис работает с 10:00 до 18:00, Выходной - Воскресенье</p>
          <p>Республика Дагестан, г. Махачкала , Батырая 155</p>
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
                center: [42.972968, 47.517231],
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
          <p>ethnotravel@marwa.ru</p>
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
          </div>
        </div>
        <div className={styles.contactsMainBlock}>
          <YMaps className={styles.map}>
            <Map
              className={styles.Map}
              defaultState={{
                center: [48.699855, 44.494041],
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
