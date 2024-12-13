import React from 'react';
import styles from './styles/CloseBtn.module.scss';
import { ReactComponent as DoubleArrow } from '../../../assets/doubleArrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeFiltersWindowState } from '../../../toolkitRedux/filtersSlice';

const CloseBtn = () => {
  const dispatch = useDispatch();
  const filtersWindowState = useSelector(
    (state) => state.filtersSlice.filtersWindowState
  );

  return (
    <div
      onClick={() => {
        dispatch(changeFiltersWindowState());
      }}
      className={styles.closeBtn}
    >
      <DoubleArrow
        className={`${styles.closeArrow} ${
          filtersWindowState !== 'active' ? styles.closeArrow_hidden : ''
        }`}
      />
    </div>
  );
};

export default CloseBtn;
