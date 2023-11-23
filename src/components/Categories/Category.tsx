import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

const Category = ({ categoryName, categoryId }) => {
  return (
    <Link to={`/tours/${categoryId}`} className={styles.category}>
      <h3>{categoryName}</h3>
    </Link>
  );
};

export default Category;
