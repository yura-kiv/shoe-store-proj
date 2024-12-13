import React, { useState } from 'react';
import styles from './styles/CartPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import CartWindowProduct from '../components/CartWindow/CartWindowProduct';
import Header from '../components/FormsInput/Header';
import MakeOrder from '../components/FormsInput/MakeOrder';

const CartPage = () => {
  const cart = useSelector((state) => state.cartSlice);

  return (
    <div className={styles.cartPageWrapper}>
      <div className={styles.cartBlockWrapper}>
        <span className={styles.header}>Cart:</span>
        <span className={styles.cartCount}>Items: {cart.cartCount}</span>
        <div className={styles.cartItemsListWrapper}>
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
            <span
              style={{ opacity: '0.5', fontSize: '20px', textAlign: 'center' }}
            >
              Add products...
            </span>
          )}
        </div>
      </div>

      <div className={styles.formOrderWrapper}>
        <Header heading='Specify the details of your order' />
        <MakeOrder />
      </div>
    </div>
  );
};

export default CartPage;
