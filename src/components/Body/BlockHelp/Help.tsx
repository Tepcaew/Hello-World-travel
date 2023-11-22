import React from 'react';
import styles from './Help.module.css'
const Help = () => {
    return (
        <div className={styles.containerHelp}>
        <div className={styles.title}>
          <h1>нужна помощь?</h1>
          <p>Просто оставьте заявку и мы поможем с выбором экскурсии и подберем удобные даты!</p>
        </div>
            <div className={styles.blockInput}>
                <input type="text" placeholder='имя' />
                <input type='text' placeholder='+7 *********' />
                <input type='date'/>
                    

                
                <button className={styles.btnHelp}>отправить</button>
            </div>
        </div>
    );
};

export default Help;