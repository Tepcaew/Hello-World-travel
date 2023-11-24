import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import watsApp from "../../assets/icons8-whatsapp-48 (1).png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../features/excursionSlice";
import { getTours } from "../../features/toursSlice";
import { exits, getUserById } from "../../features/applicationSlice";
const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);
  const tours = useSelector((state) => state.tours.tours);
  const excursion = useSelector((state) => state.excursion.excursion);
  const handleExit = () => {
    dispatch(exits());
  };

  const all = tours.concat(excursion);

  const [off, setOff] = useState(true);
  const [value, setValue] = useState("");

  const filtered = all.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

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
      <Link to="/">
        <img
          className={styles.logo}
          src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png"
          alt="logo"
        />
      </Link>
      {user?.avatar ? (
        <div className={styles.user}>
          <img
            className={styles.avatar}
            src={`http://localhost:3077/${user?.avatar}`}
            alt=""
          />
          <h3 className={styles.userName}>{user.login}</h3>
        </div>
      ) : (
        <h3 className={styles.userName}>Гостевой режим</h3>
      )}
      <div className={styles.navigation}>
        <Link to="/tours">Туры</Link>
        <Link to="/excursion">Экскурсии</Link>
        <Link to="/contacts">Контакты</Link>
      </div>

      <div className={styles.Navigation2}>
        <div className={styles.cntr}>
          <div className={styles.cntr}>
            <div className={styles.cntrinnr}>
              <label className={`${styles.search} inpt_search`}>
                <input
                  onChange={(e) => setValue(e.target.value)}
                  id="inpt_search"
                  type="text"
                />
                {off && (
                  <ul className={styles.autocomplete}>
                    {value
                      ? filtered.map((item) => {
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
                        })
                      : null}
                  </ul>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
      {token ? (
        <button className={styles.buttonEnter} onClick={handleExit}>
          Выйти
        </button>
      ) : (
        <Link to="/login">
          <button className={styles.buttonEnter}>Войти</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
