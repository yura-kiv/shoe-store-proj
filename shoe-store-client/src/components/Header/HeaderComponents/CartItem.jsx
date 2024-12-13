import React from 'react';
import styles from './styles/CartItem.module.scss';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeCartWindowState } from '../../../toolkitRedux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cartSlice.cartCount);
  const cartProducts = useSelector((state) => state.cartSlice.cart);
  const cartWindowState = useSelector(
    (state) => state.cartSlice.cartWindowState
  );

  return (
    <div
      onClick={() => {
        dispatch(changeCartWindowState());
      }}
      className={
        `${styles.cartItemWrapper}` +
        ` ${cartWindowState === 'active' ? styles.active : ''}`
      }
    >
      <span className={styles.cartCount}>{cartCount}</span>
      <div className={styles.icon}>
        <CartIcon className={styles.cartIcon} />
      </div>
    </div>
  );
};

export default Cart;
