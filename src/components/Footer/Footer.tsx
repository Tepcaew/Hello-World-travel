import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/helloworld.png";
import telegramm from "../../assets/telegramm.png";
import facebook from "../../assets/facebook.png";
import vk from "../../assets/vk.png";
import youTube from "../../assets/youTube.png";
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

      <img src={logo} className={styles.footerLogo} />
      <div className={styles.botoomIcon}>
        <a href="#">
          <img src={telegramm} alt="" />
        </a>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={vk} alt="" />
        </a>
        <a href="#">
          <img src={youTube} alt="" />
        </a>
      </div>
      <span>2023</span>
    </div>
  );
};

export default Footer;
