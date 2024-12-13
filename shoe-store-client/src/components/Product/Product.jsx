import { React, useEffect, useState } from 'react';
import styles from './Product.module.scss';
import PreviewImg from './ProductComponents/PreviewImg';
import LikeBtn from './ProductComponents/LikeBtn';
import TextInf from './ProductComponents/TextInf';
import ColorBtns from './ProductComponents/ColorBtns';
import CartBtn from './ProductComponents/CartBtn';
import SizeBtns from './ProductComponents/SizeBtns';
import Rating from './ProductComponents/Rating';

const getColors = (variants) => {
  const colors = [];
  variants.forEach((el) => {
    colors.push(el.color);
  });
  return colors;
};

const getPreviewImgs = (variants) => {
  const imgs = [];
  variants.forEach((el) => {
    imgs.push(el.images[0]);
  });
  return imgs;
};

const Product = ({ product }) => {
  ////
  const [isLiked, setIsLiked] = useState(false);
  /////

  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(product.variants[0].color);
  const [activePreviewImg, setActivePreviewImg] = useState(
    product.variants[0].images[0]
  );
  const [activeSizesList, setActiveSizesList] = useState(
    product.variants[0].sizes
  );

  useEffect(() => {
    const objProduct = product.variants.filter(
      (variant) => variant.color === activeColor
    )[0];
    setActivePreviewImg(objProduct.images[0]);
    setActiveSizesList(objProduct.sizes);
    setActiveSize(null);
  }, [activeColor]);

  return (
    <div className={styles.productFirstWrapper}>
      <div className={styles.productSecondWrapper}>
        <PreviewImg
          imgsList={getPreviewImgs(product.variants)}
          activePreviewImg={activePreviewImg}
          activeColor={activeColor}
          id={product._id}
        />
        <LikeBtn
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
        <Rating ratingValue={product.aggregateRating.ratingValue} />
        <TextInf
          id={product._id}
          activeColor={activeColor}
          name={product.name}
          brand={product.brand}
          gender={product.gender}
          price={product.price}
        />
        <ColorBtns
          colors={getColors(product.variants)}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <SizeBtns
          activeSizesList={activeSizesList}
          setActiveSize={setActiveSize}
          activeColor={activeColor}
        />
        <CartBtn
          product={product}
          activeColor={activeColor}
          activeSize={activeSize}
        />
      </div>
    </div>
  );
};

export default Product;
