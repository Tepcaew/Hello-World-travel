import React from 'react';
import styles from './Header.module.css'
import watsApp from '../../assets/icons8-whatsapp-48 (1).png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
  
          <div className={styles.Header}>
            <Link to="/"><img src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png" alt="logo" /></Link>
            <div className={styles.navigation}>
                <Link to="/tours"><p>Туры</p> </Link>
                <Link to="/excursion"> <p>Экскурсии</p></Link>
                <Link to="/contacts">  <p>Контакты</p></Link>
            </div>
           <div className={styles.Navigation2}>
           <p><a href="#">8 989 912 89 89 </a> 
           <img  src={watsApp}alt="" /></p>
            <button>подобрать тур</button>
            </div> 
          </div>
  
    );
};

export default Header;