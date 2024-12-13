import React from 'react';
import styles from './styles/User.module.scss';
import ThemeToggle from './ThemeToggle';
import Cart from './CartItem';
import { ReactComponent as UserIcon } from '../../../assets/userIcon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthState } from '../../../toolkitRedux/userAuthSlice';

export const LeftELements = () => {
  const isAuth = useSelector(selectIsAuthState);

  return (
    <div className={styles.leftComponentsWrapper}>
      <Cart />
      <ThemeToggle />
      {!isAuth ? (
        <Link
          to='/login'
          className={styles.loginElement}
        >
          Login
        </Link>
      ) : (
        <Link
          to='/user'
          className={styles.userElement}
        >
          <UserIcon />
        </Link>
      )}
    </div>
  );
};
