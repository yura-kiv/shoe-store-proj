import { React, useRef } from "react";
import styles from "./styles/SizeBtns.module.scss";

const SizeBtns = ({ setActiveSize, activeSizesList, activeColor }) => {
  const sizesBtnsWrapper = useRef(null);

  const setActiveSizeBtn = (event, size) => {
    sizesBtnsWrapper.current.childNodes.forEach((el) => {
      el.classList.remove(styles.activeSizeBtn);
    });
    event.target.classList.add(styles.activeSizeBtn);
    setActiveSize(size);
  };

  return (
    <div
      ref={sizesBtnsWrapper}
      className={styles.sizeBtnsWrapper}
    >
      {activeSizesList.map((size, index) => {
        return (
          <div
            key={`${size}${index}${activeColor}`}
            className={styles.sizeBtn}
            onClick={(event) => {
              setActiveSizeBtn(event, size);
            }}
          >
            {size}
          </div>
        );
      })}
    </div>
  );
};

export default SizeBtns;
