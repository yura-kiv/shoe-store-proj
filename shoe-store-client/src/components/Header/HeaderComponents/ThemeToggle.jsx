import React from 'react';
import styles from './styles/ThemeToggle.module.scss';
import { ReactComponent as Sun } from '../../../assets/sunLightTheme.svg';
import { ReactComponent as Moon } from '../../../assets/moonDarkTheme.svg';
import { useTheme } from '../../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div
      onClick={changeTheme}
      className={
        `${styles.themeToggleWrapper} ` +
        `${theme === 'light' ? styles.light : styles.dark}`
      }
    >
      <Sun className={styles.sunLightTheme} />
      <Moon className={styles.moonDarkTheme} />
      <div className={styles.toggle} />
    </div>
  );
};

export default ThemeToggle;
