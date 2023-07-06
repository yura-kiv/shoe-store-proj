import React from "react";
import styles from "./styles/Rating.module.scss";
import { ReactComponent as StarRating } from "../../../assets/starRating.svg";

const Rating = ({ ratingValue }) => {
  return (
    <div className={styles.ratingWrapper}>
      <StarRating className={styles.ratingStar} />
      <span>{ratingValue}</span>
    </div>
  );
};

export default Rating;
