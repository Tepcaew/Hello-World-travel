import React from 'react';
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';
import logo from "../../assets/helloworld.png"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.FooterNawigation}>
                <Link to="/"> Главная </Link>
                <Link to="/tours"> Туры</Link>
                <Link to="/excursion"> Экскурсии</Link>
                <Link to="/contacts"> Контакты</Link>
                <Link to="/help"> Помощь</Link>
            </div>
            
            <img src={logo} className={styles.footerLogo}/>
             <span>2023</span>
            </div>
            
        
    );
};

export default Footer;