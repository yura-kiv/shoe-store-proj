import { React } from 'react';
import styles from './styles/GenderBtns.module.scss';
import { useDispatch } from 'react-redux';
import { changeGenders } from '../../../toolkitRedux/filtersSlice';

function GenderBtns() {
  const genders = ['Men', 'Woman'];
  const dispatch = useDispatch();

  const setActivegenderBtn = (event) => {
    event.target.classList.toggle(styles.activeGenderBtn);
    dispatch(
      changeGenders(event.target.innerText === 'Men' ? 'male' : 'female')
    );
  };

  return (
    <div className={styles.genderBtnsWrapper}>
      <span>For:</span>
      {genders.map((gender) => {
        return (
          <div
            key={gender}
            className={styles.genderBtn}
            onClick={(event) => {
              setActivegenderBtn(event);
            }}
          >
            {gender}
          </div>
        );
      })}
    </div>
  );
}

export default GenderBtns;
