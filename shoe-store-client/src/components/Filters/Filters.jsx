import { React, useState, useEffect } from "react";
import NameInput from "./FiltersComponents/NameInput";
import ColorBtns from "./FiltersComponents/ColorBtns";
import BrandBtns from "./FiltersComponents/BrandBtns";
import SizeBtns from "./FiltersComponents/SizeBtns";
import GenderBtns from "./FiltersComponents/GenderBtns";
import Price from "./FiltersComponents/Price";
import TagBtns from "./FiltersComponents/TagBtns";
import CloseBtn from "./FiltersComponents/CloseBtn";
import UseFiltersBtn from "./FiltersComponents/UseFiltersBtn";
import styles from "./Filters.module.scss";
import { useSelector } from "react-redux";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const Filters = () => {
  const filtersWindowState = useSelector(
    (state) => state.filtersSlice.filtersWindowState
  );
  const { screen770_plus } = useMatchMedia();

  useEffect(() => {
    if (filtersWindowState === "active" && !screen770_plus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filtersWindowState, screen770_plus]);

  return (
    <div
      className={`${styles.filtersFirstWrapper} ${
        filtersWindowState !== "active" ? styles.hiddenFirstWrapper : ""
      }`}
    >
      <div
        className={`${styles.filtersSecondWrapper} ${
          filtersWindowState !== "active" ? styles.hiddenSecondWrapper : ""
        }`}
      >
        <span className={styles.filtersHeader}>Filters</span>
        <CloseBtn />
        <UseFiltersBtn />
        <NameInput />
        <BrandBtns />
        <GenderBtns />
        <ColorBtns />
        <SizeBtns />
        <Price />
        <TagBtns />
      </div>
    </div>
  );
};

export default Filters;
