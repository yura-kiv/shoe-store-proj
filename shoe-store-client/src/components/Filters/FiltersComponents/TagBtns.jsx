import { React } from 'react';
import styles from './styles/TagBtns.module.scss';
import { tags } from '../filterAssets';
import { useDispatch } from 'react-redux';
import { changeTags } from '../../../toolkitRedux/filtersSlice';

function TagBtns() {
  const dispatch = useDispatch();
  const toggleActivetagBtn = (event, tag) => {
    event.target.classList.toggle(styles.activeTagBtn);
    dispatch(changeTags(tag));
  };

  return (
    <div className={styles.tagBtnsWrapper}>
      <span className={styles.filterCategory}>Tags:</span>
      {tags.map((tag) => {
        return (
          <div
            key={tag}
            className={styles.tagBtn}
            onClick={(event) => {
              toggleActivetagBtn(event, tag);
            }}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}

export default TagBtns;
