import React from "react";
import styles from "./styles/MainPage.module.scss";
import ArrowBtn from "../components/ArrowBtn/ArrowBtn";
import menShoesImg from "../assets/menCategoryImg.png";
import womanShoesImg from "../assets/womanCategoryImg.png";
import allShoes1 from "../assets/allShoes1.png";
import allShoes2 from "../assets/allShoes2.png";
import allShoes3 from "../assets/allShoes3.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.blocksWrapper}>
        <Link
          to={"shoes/all"}
          className={styles.bigBlockItem}
        >
          <span className={styles.blockHeader}>All shoes:</span>
          <ArrowBtn className={styles.btn} />
          <div className={styles.imgWrapper}>
            <img src={allShoes3}></img>
            <img src={allShoes2}></img>
            <img src={allShoes1}></img>
          </div>
        </Link>
        <Link
          to={"shoes/men"}
          className={styles.smallBlockItem}
        >
          <span className={styles.blockHeader}>Men:</span>
          <ArrowBtn className={styles.btn} />
          <div className={styles.imgWrapper}>
            <img src={menShoesImg}></img>
          </div>
        </Link>
        <Link
          to={"shoes/woman"}
          className={styles.smallBlockItem}
        >
          <span className={styles.blockHeader}>Woman:</span>
          <ArrowBtn className={styles.btn} />
          <div className={styles.imgWrapper}>
            <img src={womanShoesImg}></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
