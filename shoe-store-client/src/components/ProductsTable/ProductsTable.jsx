import React, { useEffect } from 'react';
import Product from '../Product/Product';
import styles from './ProductsTable.module.scss';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../toolkitRedux/productsCollectionSlice';
import { useLocation, useParams } from 'react-router-dom';
import {
  changeFiltersToInitialState,
  changeGenders,
  changePage,
} from '../../toolkitRedux/filtersSlice';
import Pagination from '../Pagination/Pagination';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { updateProductsCollectionToInitialState } from '../../toolkitRedux/productsCollectionSlice';

const ProductsTable = () => {
  const { screen769_plus } = useMatchMedia();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const { products, status, error } = useSelector(
    (state) => state.productsCollectionSlice
  );
  const gender =
    params.type === 'all' ? null : params.type === 'men' ? 'male' : 'female';

  useEffect(() => {
    dispatch(fetchProducts({ filters: { genders: [gender] } }));
    dispatch(changeFiltersToInitialState());
    dispatch(changeGenders(gender));
    dispatch(changePage(1));
    return () => {
      dispatch(updateProductsCollectionToInitialState());
    };
  }, [location]);

  return (
    <div className={styles.productsTable}>
      {status === 'fulfilled' ? (
        <>
          {products.map((product) => {
            return (
              <Product
                key={product._id}
                product={product}
              />
            );
          })}
          <Pagination />
        </>
      ) : (
        <>
          {screen769_plus ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            <></>
          )}
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )}
    </div>
  );
};

export default ProductsTable;
