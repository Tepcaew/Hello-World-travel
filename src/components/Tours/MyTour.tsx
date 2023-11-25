import React from 'react';
import styles from "./Tours.module.css";

const MyTour = (id, name, date, confirmed) => {
    return (
        <div className={styles.myTour}>
            <div>{name}</div>
        </div>
    );
};

export default MyTour;