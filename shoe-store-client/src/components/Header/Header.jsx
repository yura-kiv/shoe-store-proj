import React from 'react';
import styles from './Header.module.scss';
import { Logo } from './HeaderComponents/Logo';
import { LeftELements } from './HeaderComponents/LeftELements';
import Menu from './HeaderComponents/Menu';
import CartWindow from '../CartWindow/CartWindow';
import { useMatchMedia } from '../../hooks/useMatchMedia';

const Header = () => {
  const { screen770_plus } = useMatchMedia();
  return (
    <div
      className={styles.headerWrapper}
      id='header'
    >
      <Logo />
      {screen770_plus && <Menu />}
      <LeftELements />
      <CartWindow />
    </div>
  );
};

export default Header;
