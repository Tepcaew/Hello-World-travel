import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import watsApp from "../../assets/icons8-whatsapp-48 (1).png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../features/excursionSlice";
import { getTours } from "../../features/toursSlice";
const Header = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours);
  const excursion = useSelector((state) => state.excursion.excursion);

  const all = tours.concat(excursion);
  console.log(all);

  const [off, setOff] = useState(true);
  const [value, setValue] = useState("");

  const filtered = all.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  const handle = () => {
    setOff(false);
  };

  useEffect(() => {
    dispatch(getExcursion(), getTours());
  }, [dispatch]);

  return (
    <div className={styles.Header}>
      <Link to="/">
        <img
          src="https://static.tildacdn.com/tild3932-3539-4037-a465-346232333537/___.png"
          alt="logo"
        />
      </Link>
      <div className={styles.navigation}>
        <Link to="/tours">
          <p>Туры</p>{" "}
        </Link>
        <Link to="/excursion">
          {" "}
          <p>Экскурсии</p>
        </Link>
        <Link to="/contacts">
          {" "}
          <p>Контакты</p>
        </Link>
      </div>
      <button>подобрать тур</button>
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
                              <li className={styles.item} key={item._id}>{item.name}</li>
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
    </div>
  );
};

export default Header;
function usestate(data: any): [any, any] {
  throw new Error("Function not implemented.");
}
