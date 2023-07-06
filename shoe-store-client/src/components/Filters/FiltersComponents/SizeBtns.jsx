import { React } from "react";
import styles from "./styles/SizeBtns.module.scss";
import { sizes } from "../filterAssets";
import { useDispatch } from "react-redux";
import { changeSizes } from "../../../toolkitRedux/filtersSlice";

const SizeBtns = () => {
  const dispatch = useDispatch();
  const toggleActiveSizeBtn = (event, size) => {
    event.target.classList.toggle(styles.activeSizeBtn);
    dispatch(changeSizes(size));
  };

  return (
    <div className={styles.sizeBtnsWrapper}>
      <span>Sizes:</span>
      {sizes.map((size, index) => {
        return (
          <div
            key={`${size}${index}`}
            className={styles.sizeBtn}
            onClick={(event) => {
              toggleActiveSizeBtn(event, size);
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
