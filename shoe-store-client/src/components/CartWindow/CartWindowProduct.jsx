import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles/CartWindowProduct.module.scss';
import { deleteProductFromCart } from '../../toolkitRedux/cartSlice';
import { ReactComponent as DeleteBtn } from '../../assets/plus.svg';
import { Link } from 'react-router-dom';

const CartWindowProduct = ({ product }) => {
  const dispatch = useDispatch();
  const chooseImg = () => {
    const res = product.variants.find((v) => v.color === product.activeColor);
    return res.images[0];
  };
  const link = `http://localhost:3000/img/${chooseImg()}`;

  return (
    <div className={styles.productWrapper}>
      <Link
        to={`/shoes/${product._id}/${product.activeColor}/`}
        className={styles.productName}
      >
        {product.name}
      </Link>
      <Link
        to={`/shoes/${product._id}/${product.activeColor}/`}
        className={styles.previewImgWrapper}
      >
        <img
          className={styles.previewImg}
          src={link}
        ></img>
      </Link>
      <div className={styles.textInfo}>
        <span>{product.gender === 'male' ? 'Men' : 'Woman'}</span>
        <span>Size: {product.activeSize}</span>
        <span>
          Color:
          {' ' +
            product.activeColor.charAt(0).toUpperCase() +
            product.activeColor.slice(1)}
        </span>
      </div>
      <div
        onClick={() => {
          dispatch(deleteProductFromCart(product));
        }}
        className={styles.deleteBtn}
      >
        <DeleteBtn className={styles.deleteIcon} />
      </div>
    </div>
  );
};

export default CartWindowProduct;
