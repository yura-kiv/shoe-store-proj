import React, { useState, useEffect } from "react";
import styles from "./styles/ProductPage.module.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import ColorBtns from "../components/Product/ProductComponents/ColorBtns";
import SizeBtns from "../components/Product/ProductComponents/SizeBtns";
import CartBtn from "../components/Product/ProductComponents/CartBtn";
import Rating from "../components/Product/ProductComponents/Rating";
import LikeBtn from "../components/Product/ProductComponents/LikeBtn";

const getColors = (variants) => {
  const colors = [];
  variants.forEach((el) => {
    colors.push(el.color);
  });
  return colors;
};

const getVariant = (variants, color) => {
  const variant = variants.find((variant) => variant.color === color);
  return variant;
};

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState();
  const [productVariant, setProductVariant] = useState();
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(params.color);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const id = params.id;
    if (activeColor === params.color) {
      fetch(`http://localhost:3000/api/products/${id}`)
        .then((response) => response.json())
        .then((product) => {
          setProduct(product);
          setProductVariant(getVariant(product.variants, activeColor));
        })
        .catch((error) => {
          console.log("Opppppppssss.... something went wrong!");
        });
    } else {
      navigate(`/shoes/${params.type}/${params.id}/${activeColor}`);
      setProductVariant(getVariant(product.variants, activeColor));
      setActiveSize(null);
    }
  }, [activeColor]);

  return (
    <div className={styles.productPageWrapper}>
      {product && (
        <>
          <div className={styles.sliderWrapper}>
            <Rating ratingValue={product.aggregateRating.ratingValue} />
            <LikeBtn
              isLiked={isLiked}
              setIsLiked={setIsLiked}
            />
            <ProductSlider imgsList={productVariant.images} />
          </div>
          <div className={styles.infoProductWrapper}>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.code}>{product.code}</span>
            <span className={styles.gender}>
              {product.gender === "male" ? "Men" : "Woman"}
            </span>
            <span className={styles.brand}>{product.brand}</span>
            <span className={styles.price}>${product.price}</span>
            <div className={styles.tagsWrapper}>
              <span className={styles.tagsHeader}>Tags:</span>
              {product.tags.map((tag, index) => {
                if (product.tags.length - 1 === index) {
                  return `${tag}`;
                }
                return `${tag}, `;
              })}
            </div>
            <div className={styles.colorWrapper}>
              <span className={styles.colorsHeader}>Colors:</span>
              <div className={styles.colorBtnsWrapper}>
                <ColorBtns
                  colors={getColors(product.variants)}
                  activeColor={activeColor}
                  setActiveColor={setActiveColor}
                />
              </div>
            </div>
            <div className={styles.sizeWrapper}>
              <span className={styles.sizesHeader}>Sizes:</span>
              <div className={styles.sizeBtnsWrapper}>
                <SizeBtns
                  setActiveSize={setActiveSize}
                  activeSizesList={productVariant.sizes}
                  activeColor={activeColor}
                />
              </div>
            </div>
            <div className={styles.cartBtnWrapper}>
              <CartBtn
                product={product}
                activeColor={activeColor}
                activeSize={activeSize}
              />
            </div>
            <span className={styles.description}>{product.description}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
