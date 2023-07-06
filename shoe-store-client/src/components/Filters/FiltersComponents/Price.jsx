import React, { useState, useEffect } from "react";
import styles from "./styles/Price.module.scss";
import ArrowBtn from "../../ArrowBtn/ArrowBtn";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  trackStyle,
  railStyle,
  handleStyle,
  marks,
  activeDotStyle,
} from "./styles/rangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { changePage, changePrices } from "../../../toolkitRedux/filtersSlice";
import { fetchProducts } from "../../../toolkitRedux/productsCollectionSlice";

const Price = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filtersSlice.filters);

  const btnHandler = () => {
    dispatch(fetchProducts({ filters: { ...filters, page: 1 } }));
    dispatch(changePage(1));
  };

  const sliderHandler = (values) => {
    dispatch(changePrices({ min: values[0], max: values[1] }));
  };

  return (
    <div className={styles.priceWrapper}>
      <span>Prices:</span>
      <span className={styles.priceTextInfo}>
        ${filters.prices[0]} - ${filters.prices[1]}
      </span>
      <ArrowBtn btnHandler={btnHandler} />
      <div className={styles.sliderWrapper}>
        <Slider
          range
          min={0}
          max={300}
          defaultValue={[0, 300]}
          trackStyle={trackStyle}
          railStyle={railStyle}
          handleStyle={handleStyle}
          marks={marks}
          activeDotStyle={activeDotStyle}
          onChange={sliderHandler}
        />
      </div>
    </div>
  );
};

export default Price;
