import React from 'react';
import styles from './Header.module.css'
import watsApp from '../../assets/icons8-whatsapp-48 (1).png'
const Header = () => {
    return (
  
          <div className={styles.Header}>
            <img src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png" alt="logo" />
            <div className={styles.navigation}>
                <a href="https://etnotravel.ru/tury"><p>Туры</p> </a>
                <a href="https://etnotravel.ru/ehkskursii"> <p>Экскурсии</p></a>
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