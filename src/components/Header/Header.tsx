import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../features/excursionSlice";
import { getTours } from "../../features/toursSlice";
import { exits, getUserById } from "../../features/applicationSlice";
import logo from "../../assets/helloworld.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { sidebarOpen } from "../../features/justReducer";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);
  const tours = useSelector((state) => state.tours.tours);
  const excursion = useSelector((state) => state.excursion.excursion);

  const all = tours.concat(excursion);

  const [off, setOff] = useState(false);
  const [value, setValue] = useState("");

  const filtered = all.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  const handleSidebar = () => {
    dispatch(sidebarOpen());
  };

  useEffect(() => {
    dispatch(getExcursion(), getTours());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getUserById());
    }
  }, [dispatch, token]);

  return (
    <div className={styles.Header}>
      <a
        onClick={handleSidebar}
        className={styles.sidebarPoint}
        aria-current="page"
      >
        <i className="bi bi-list"></i>
      </a>
      <div className={styles.logoBlock}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navigation}>
        <Link to="/tours" className={styles.menuPoint}>
          Туры
        </Link>
        <Link to="/excursion" className={styles.menuPoint}>
          Экскурсии
        </Link>
        <Link to="/contacts" className={styles.menuPoint}>
          Контакты
        </Link>
      </div>

      <div className={styles.Navigation2}>
        <div className={styles.cntr}>
          <div className={styles.cntr}>
            <div className={styles.cntrinnr}>
              <label  className={`${styles.search} ${styles.inpt_search}`}>
                <input
                  
                  onChange={(e) => setValue(e.target.value)}
                  onClick={()=>(setOff(true))}
                  id="inpt_search"
                  type="text"
                />
                {off?<ul className={styles.autocomplete}>

                    {value&&filtered.map((item) => {
                          return (
                            <Link
                              to={
                                item.length
                                  ? `/tours/${item._id}`
                                  : `/excursion/${item._id}`
                              }
                            >
                              <li className={styles.item} key={item._id}>
                                {item.name}
                              </li>
                            </Link>
                          );
                        })}

                  </ul>:null} 
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
