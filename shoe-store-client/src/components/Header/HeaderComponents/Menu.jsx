import React from 'react';
import styles from './styles/Menu.module.scss';
import { NavLink } from 'react-router-dom';

const selectActive = (flag) => {
  return `${styles.menuElement}` + ` ${flag ? styles.active : ''}`;
};

const Menu = () => {
  return (
    <nav className={styles.menuElementsWrapper}>
      <NavLink
        to='/shoes/all'
        className={({ isActive }) => selectActive(isActive)}
      >
        All
      </NavLink>
      <NavLink
        to='/shoes/men'
        className={({ isActive }) => selectActive(isActive)}
      >
        Men
      </NavLink>
      <NavLink
        to='/shoes/woman'
        className={({ isActive }) => selectActive(isActive)}
      >
        Woman
      </NavLink>
    </nav>
  );
};

export default Menu;
