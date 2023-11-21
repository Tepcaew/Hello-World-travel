import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExcursion } from "../../features/excursionSlice";
import { Link } from "react-router-dom";

const Carts = () => {
  const excursions = useSelector((state) => state.excursion.excursion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExcursion());
  }, [dispatch]);

  return (
    <div>
      {excursions.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <p>{item.descr}</p>
            <p>{item.price}</p>
            <p>оценка: {item.rating}</p>
            <img src={`http://localhost:3077/${item.image}`} alt="" />
            <button>
              <Link to={`/excursion/${item._id}`}>Подробнее</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Carts;
