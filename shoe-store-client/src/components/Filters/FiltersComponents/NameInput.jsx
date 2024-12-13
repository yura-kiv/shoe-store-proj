import React from 'react';
import styles from './styles/NameInput.module.scss';
import ArrowBtn from '../../ArrowBtn/ArrowBtn';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changePage } from '../../../toolkitRedux/filtersSlice';
import { fetchProducts } from '../../../toolkitRedux/productsCollectionSlice';

const NameInput = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filtersSlice.filters);

  const btnHandler = () => {
    if (filters.name === '') return;
    dispatch(fetchProducts({ filters: { ...filters, page: 1 } }));
    dispatch(changePage(1));
  };

  const inputNameHandler = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className={styles.nameInputWrapper}>
      <span>Search names:</span>
      <input
        className={styles.nameInput}
        placeholder='Shoes name:'
        type='text'
        onChange={inputNameHandler}
      />
      <ArrowBtn btnHandler={btnHandler} />
    </div>
  );
};

export default NameInput;
