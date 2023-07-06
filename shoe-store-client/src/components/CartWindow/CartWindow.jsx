import React, { useEffect } from "react";
import styles from "./styles/CartWindow.module.scss";
import CartWindowProduct from "./CartWindowProduct";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { updateCartToInitialState } from "../../toolkitRedux/cartSlice";
import { ReactComponent as CloseBtn } from "../../assets/doubleArrow.svg";
import {
  changeCartWindowState,
  closeCartWindow,
} from "../../toolkitRedux/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const CartWindow = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { screen600_plus } = useMatchMedia();
  const cart = useSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(closeCartWindow());
  }, [location]);

  useEffect(() => {
    if (cart.cartWindowState === "active" && !screen600_plus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cart.cartWindowState, screen600_plus]);

  return (
    <div
      className={`${styles.cartWindowFirstWrapper} ${
        cart.cartWindowState === "active" ? styles.active : ""
      }`}
    >
      <div
        className={`${styles.cartWindowSecondWrapper} ${
          cart.cartWindowState === "active" ? styles.active : ""
        }`}
      >
        <div
          onClick={() => {
            dispatch(changeCartWindowState());
          }}
          className={styles.closeBtnWrapper}
        >
          <CloseBtn className={styles.closeBtn} />
        </div>
        <div className={styles.cartHeader}>
          <span>Cart:</span>
        </div>
        <span className={styles.textInfo}>Items: {cart.cartCount}</span>
        <div className={styles.cartItemsList}>
          {cart.cartCount > 0 ? (
            cart.cart.map((product) => {
              return (
                <CartWindowProduct
                  key={product._id + product.time}
                  product={product}
                />
              );
            })
          ) : (
            <span style={{ opacity: "0.5", fontSize: "16px" }}>
              Cart is empty...
            </span>
          )}
        </div>
        <div className={styles.cartFooter}>
          <Link
            to={"/cart"}
            className={styles.goToBtn}
          >
            <span>Go to the cart</span>
            <div className={styles.arrowWrapper}>
              <Arrow className={styles.arrow} />
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(updateCartToInitialState());
            }}
            className={styles.deleteBtn}
          >
            <DeleteIcon className={styles.deleteIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWindow;
