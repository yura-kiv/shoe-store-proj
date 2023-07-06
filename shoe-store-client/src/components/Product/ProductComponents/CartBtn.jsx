import React from "react";
import styles from "./styles/CartBtn.module.scss";
import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../toolkitRedux/cartSlice";
import ToastNotification from "../../../toastNotification/toast";

const CartBtn = ({ product, activeColor, activeSize }) => {
  const dispatch = useDispatch();
  const btnHandler = () => {
    if (!activeSize) {
      ToastNotification.warn("Choose the size");
      return;
    }
    dispatch(
      addProductToCart({ product: { ...product, activeColor, activeSize } })
    );
  };

  return (
    <div
      onClick={btnHandler}
      className={styles.cartBtn}
    >
      <span>Add to cart</span>
      <div className={styles.plusWrapper}>
        <Plus className={styles.plus}></Plus>
      </div>
    </div>
  );
};

export default CartBtn;
