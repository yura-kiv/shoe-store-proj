import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/fullLogo.svg';
import { ReactComponent as AnimateStr } from '../../assets/animateStr.svg';
import { useMatchMedia } from '../../hooks/useMatchMedia';

const Footer = () => {
  const { screen600_plus } = useMatchMedia();
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      {screen600_plus && (
        <div className={styles.marquee}>
          <div className={styles.marqueeContent + ' ' + styles.scroll}>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
          </div>
          <div className={styles.marqueeContent + ' ' + styles.scroll}>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
            <div className={styles.svgTextWrapper}>
              <AnimateStr />
            </div>
          </div>
        </div>
      )}
      <div className={styles.contactInfo}>tel. +38(097)1860388</div>
    </div>
  );
};

export default Footer;
