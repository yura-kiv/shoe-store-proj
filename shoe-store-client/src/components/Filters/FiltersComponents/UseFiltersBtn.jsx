import React from "react";
import styles from "./styles/UseFiltersBtn.module.scss";
import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFiltersBtnState,
  changePage,
} from "../../../toolkitRedux/filtersSlice";
import { fetchProducts } from "../../../toolkitRedux/productsCollectionSlice";

const UseFiltersBtn = () => {
  const btnState = useSelector((state) => state.filtersSlice.filtersBtnState);
  const filters = useSelector((state) => state.filtersSlice.filters);
  const dispatch = useDispatch();

  const btnHandler = () => {
    if (btnState === "") return;
    dispatch(fetchProducts({ filters: { ...filters, page: 1 } }));
    dispatch(changeFiltersBtnState());
    dispatch(changePage(1));
  };

  return (
    <div
      onClick={btnHandler}
      className={`${styles.useFiltersBtn} ${styles[btnState]}`}
    >
      <span>Use filters</span>
      <div className={styles.plusWrapper}>
        <Plus className={styles.plus}></Plus>
      </div>
    </div>
  );
};

export default UseFiltersBtn;
