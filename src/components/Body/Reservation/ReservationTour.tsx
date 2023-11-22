import React from 'react';
import styles from './Reservation.module.css'
const ReservationTour = () => {
    return (
        <div className={styles.containerReservationTour}>
           <div className={styles.reservationTitle}>

            <h1>НРАВИТСЯ? БРОНИРУЙТЕ ТУР</h1>
            <p>Заполните небольшую анкету, и мы свяжемся с вами и ответим на все вопросы.</p>

           </div>
            <div className={styles.reservationInputs}>
            <input placeholder='телефон' type="text" />
            <input placeholder='имя' type="text" />
            <textarea placeholder='какой тур хотите выбрать?' name="" id="" cols="60" rows="5"></textarea>
            <button>отправить</button>

            </div>
        </div>
    );
};

export default ReservationTour;