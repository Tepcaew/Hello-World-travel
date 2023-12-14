import React from 'react';
import styles from './Reviews.module.css'
const Reviews = () => {
    return (
        <div className={styles.containerReviews}>
            <div className={styles.titleReviews}>

            <h1>Отзывы о наших экскурсиях! </h1>
           <p> Прочитайте отзывы об Этнотревел на Яндекс и 2ГИС. Посмотрите эмоции наших гостей! </p>
            
                <button className={styles.greenButton}>отзывы на 2ГИС</button>
                <button className={styles.redButton}>отзывы на яндекс</button>

            </div>
            
           
        </div>
    );
};

export default Reviews;


