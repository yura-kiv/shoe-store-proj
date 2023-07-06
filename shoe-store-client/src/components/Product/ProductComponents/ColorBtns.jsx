import React, { useRef } from "react";
import styles from "./styles/ColorBtns.module.scss";

const ColorBtns = ({ colors, activeColor, setActiveColor }) => {
  const colorBtnsWrapper = useRef(null);

  const setActiveColorBtn = (event, color) => {
    colorBtnsWrapper.current.childNodes.forEach((el) => {
      el.classList.remove(styles.activeColorBtn);
    });
    setActiveColor(color);
    event.target.classList.add(styles.activeColorBtn);
  };

  return (
    <div
      ref={colorBtnsWrapper}
      className={styles.colorsWrapper}
    >
      {colors.map((color, index) => {
        return (
          <div
            onClick={(event) => setActiveColorBtn(event, color)}
            key={`${color}${index}`}
            className={
              `${styles.colorBtn} ` +
              styles[`colorBtn_${color}`] +
              `${color === activeColor ? ` ${styles.activeColorBtn}` : ""}`
            }
          ></div>
        );
      })}
    </div>
  );
};

export default ColorBtns;
