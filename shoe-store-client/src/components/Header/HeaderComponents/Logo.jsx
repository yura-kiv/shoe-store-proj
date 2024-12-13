import React from 'react';
import styles from './styles/Logo.module.scss';
import { ReactComponent as StarLogo } from '../../../assets/starLogo.svg';
import { ReactComponent as TextLogoDote } from '../../../assets/textLogoDote.svg';
import { ReactComponent as ElipseLogo } from '../../../assets/ellipseLogo.svg';
import { Link } from 'react-router-dom';
import { useMatchMedia } from '../../../hooks/useMatchMedia';

export const Logo = () => {
  const { screen600_plus } = useMatchMedia();
  return (
    <Link
      to='/'
      className={styles.mainLogo}
    >
      <div className={styles.iconLogo}>
        <StarLogo className={styles.starLogo} />
        <ElipseLogo className={styles.ellipseLogo} />
      </div>
      {screen600_plus && <TextLogoDote className={styles.textLogoDote} />}
    </Link>
  );
};
