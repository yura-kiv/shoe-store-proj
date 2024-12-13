import React from 'react';
import styles from './ProductSkeleton.module.scss';

const ProductSkeleton = () => {
  return (
    <div className={styles.productSkeletonFirstWrapper}>
      <div className={styles.productSkeletonSecondWrapper}>
        <div className={styles.previewImg} />
        <div className={styles.likeBtn} />
        <div className={styles.rating} />
        <div className={styles.textInfo}>
          <div className={styles.textInfoHeader} />
          <div className={styles.textInfoBrand} />
          <div className={styles.textInfoGender} />
          <div className={styles.textInfoPrice} />
        </div>
        <div className={styles.colorBtns}>
          <div className={styles.colorBtn} />
          <div className={styles.colorBtn} />
          <div className={styles.colorBtn} />
        </div>
        <div className={styles.sizeBtns}>
          <div className={styles.sizeBtn} />
          <div className={styles.sizeBtn} />
          <div className={styles.sizeBtn} />
        </div>
        <div className={styles.cartBtn} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
