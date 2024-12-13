import { React } from 'react';
import styles from './styles/BrandBtns.module.scss';
import { brands } from '../filterAssets';
import { useDispatch } from 'react-redux';
import { changeBrands } from '../../../toolkitRedux/filtersSlice';

function BrandBtns() {
  const dispatch = useDispatch();

  const toggleActivebrandBtn = (event) => {
    event.target.classList.toggle(styles.activeBrandBtn);
    dispatch(changeBrands(event.target.innerText));
  };

  return (
    <div className={styles.brandBtnsWrapper}>
      <span>Brands:</span>
      {brands.map((brand) => {
        return (
          <div
            key={brand}
            className={styles.brandBtn}
            onClick={(event) => {
              toggleActivebrandBtn(event);
            }}
          >
            {brand}
          </div>
        );
      })}
    </div>
  );
}

export default BrandBtns;
