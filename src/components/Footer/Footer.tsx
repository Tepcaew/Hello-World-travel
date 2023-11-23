import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.FooterNawigation}>
                <Link to="/"> Главная </Link>
                <Link to="/tours"> Туры</Link>
                <Link to="/excursion"> Экскурсии</Link>
                <Link to="/contacts"> Контакты</Link>
                <a href="#"> WhatsApp</a>
            </div>
            
            <img src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png" alt="logo" />
             <span>© All Rights Reserved</span>
            </div>
            
        
    );
};

export default Footer;