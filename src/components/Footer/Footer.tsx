import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.FooterNawigation}>
                <a href="#"> Главная </a>
                <a href="#"> Туры</a>
                <a href="#"> Экскурсии</a>
                <a href="#"> Контакты</a>
                <a href="#"> WhatsApp</a>
            </div>
            
            <img src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png" alt="logo" />
             <p>© All Rights Reserved</p>
            </div>
            
        
    );
};

export default Footer;