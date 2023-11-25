import React, { useState } from "react";
import styles from "./Reservation.module.css";
import { addOrders } from "../../../features/ordersSlice";
import { useDispatch } from "react-redux";
const ReservationTour = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
    const dispatch = useDispatch();
  
    const handleSetName = (e) => {
      setName(e.target.value);
    };
    const handleSetPhone = (e) => {
      setPhone(e.target.value);
    }
    const handleSetMessage = (e) => {
      setMessage(e.target.value);
  }
  
    const handleAddorders = () => {
      dispatch(addOrders({name, phone, message }));
    };
  return (
    <div className={styles.application}>
      <div className={styles.applicationContent}>
        <div>
          <h2>Оставьте заявку</h2>
          <p>Заполните заявку и мы свяжемся с Вами!</p>
        </div>
        <p>имя</p>
        <input value={name} onChange={handleSetName} type="text" />
        <p>телефон</p>
        <input value={phone} onChange={handleSetPhone} type="text" />
        <p>сообщение</p>
        <input value={message} onChange={handleSetMessage} type="text" />
      </div>
      <button onClick={handleAddorders}>отправить</button>
      <p className={styles.pt}>
        Нажимая на кнопку "Отправить", Вы соглашаетесь с условиями и
        пользовательским соглашением.
      </p>
    </div>
  );
};

export default ReservationTour;
