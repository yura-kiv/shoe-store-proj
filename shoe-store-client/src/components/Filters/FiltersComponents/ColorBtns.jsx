import { React } from 'react';
import styles from './styles/ColorBtns.module.scss';
import { colors } from '../filterAssets';
import { useDispatch } from 'react-redux';
import { changeColors } from '../../../toolkitRedux/filtersSlice';

function ColorBtns() {
  const dispatch = useDispatch();
  const toggleActiveColorBtn = (event, color) => {
    event.target.classList.toggle(styles.activeColorBtn);
    dispatch(changeColors(color));
  };

  return (
    <div className={styles.colorBtnsWrapper}>
      <span>Colors:</span>
      {colors.map((color, index) => {
        return (
          <div
            onClick={(event) => toggleActiveColorBtn(event, color)}
            key={`${color}`}
            className={`${styles.colorBtn} ` + styles[`colorBtn_${color}`]}
          ></div>
        );
      })}
    </div>
  );
}

export default ColorBtns;
