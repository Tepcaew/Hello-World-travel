import React from 'react';
import styles from './Header.module.css'
import watsApp from '../../assets/icons8-whatsapp-48 (1).png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
  
          <div className={styles.Header}>
            {/* <div className={styles.vedeoBg}>
                <video src="https://www.youtube.com/embed/pS9tWIsAzmE?start=31&autoplay=1&loop=1&enablejsapi=1&playerapiid=featuredytplayer&controls=0&modestbranding=1&rel=0&showinfo=0&color=white&iv_load_policy=3&theme=light&wmode=transparent&origin=https://etnotravel.ru&playlist=pS9tWIsAzmE&mute=1" type ="video/mp4" autoPlay muted loop></video>
            </div> */}
            <img src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png" alt="logo" />
            <div className={styles.navigation}>
                <Link to="/tours"><p>Туры</p> </Link>
                <Link to="/excursion"> <p>Экскурсии</p></Link>
                <a href="https://etnotravel.ru/contact"> <p>Контакты</p></a>
            </div>
           <div className={styles.Navigation2}>
           <p><a href="#">8989 912 89 89 </a> 
           <img  src={watsApp}alt="" /></p>
            <button>подобрать тур</button>
            </div> 
          </div>
  
    );
};

export default Header;