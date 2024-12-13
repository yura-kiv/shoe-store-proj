/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        logoStarAnimation: 'logoStarAnimation 0.5s ease-in-out 1',
        logoEllipseAnimation: 'logoEllipseAnimation 0.5s ease-in-out 1',
        plusAnimation: 'plusAnimation 0.5s ease-in-out 1',
        cartWindowUpriseAnimation:
          'cartWindowUpriseAnimation ease-in-out 0.2s 1',
        cartWindowHideAnimation: 'cartWindowHideAnimation 0.2s 1',
        shoesUpriseAnimation: 'shoesUpriseAnimation 0.3s 1',
      },
      keyframes: {
        logoStarAnimation: {
          '0%': { transform: 'rotate(0deg)', scale: '1.0' },
          '30%': { transform: 'rotate(10deg)', scale: '1.1' },
          '60%': { transform: 'rotate(-10deg)', scale: '1.2' },
          '100%': { transform: 'rotate(0deg)', scale: '1.0' },
        },
        logoEllipseAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        plusAnimation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        cartWindowUpriseAnimation: {
          '0%': { opacity: '0', scale: '0.8', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', scale: '1', transform: 'translateY(0px)' },
        },
        cartWindowHideAnimation: {
          '0%': { opacity: '1', scale: '1', transform: 'translateY(0px)' },
          '100%': {
            opacity: '0',
            scale: '0.8',
            transform: 'translateY(-50px)',
          },
        },
        shoesUpriseAnimation: {
          '0%': { opacity: '0', scale: '0.8' },
          '50%': { opacity: '0.8', scale: '1.1' },
          '100%': {
            opacity: '1',
            scale: '1',
          },
        },
      },
    },
    fontFamily: {
      poppins: ['DM Sans', 'sans-serif'],
    },
    colors: {
      backgroundFirst: 'var(--backgroundFirst)',
      backgroundSecond: 'var(--backgroundSecond)',
      backgroundOppositeSecond: 'var(--backgroundOppositeSecond)',

      textColorFirst: 'var(--textColorFirst)',
      textColorOppositeFirst: 'var(--textColorOppositeFirst)',
      textDarkConstant: 'var(--textDarkConstant)',

      borderOppositeFirst: 'var(--borderOppositeFirst)',
      borderFirst: 'var(--borderFirst)',

      greenColorConstant: 'var(--greenColorConstant)',
      darkColorConstant: 'var(--darkColorConstant)',

      btnWhite: '#FDFEFE',
      btnBlack: '#000000',
      btnGreen: '#186A3B',
      btnOrange: '#D35400',
      btnGray: '#797D7F',
      btnYellow: '#F4D03F',
      btnBlue: '#2E86C1',
      btnPink: '#F1948A',
      btnRed: '#C0392B',
      btnBrown: '#784212',
      btnPurple: '#76448A',
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config, theme }) {
      // Добавьте сюда свои собственные стили
      addUtilities({
        '.smallGreenBtn': {
          height: '40px',
          width: '40px',
          background: theme('colors.greenColorConstant'),
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transitionProperty: 'box-shadow, scale',
          transitionDuration: '0.15s',
          userSelect: 'none',
          '&:hover': {
            scale: '1.1',
            boxShadow:
              '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          '&:active': {
            scale: '1.15',
          },
        },
        '.shadowBorder': {
          boxShadow: '0 0 0 0px #ffffff, 0 0 0 2px var(--greenColorConstant)',
        },
        '.gridBackground': {
          backgroundSize: '10vh 10vh',
          backgroundPosition: '15% 10%',
          backgroundImage:
            'linear-gradient(to right, var(--backgroundOppositeSecond) 1px, transparent 1px), linear-gradient(to bottom, var(--backgroundOppositeSecond) 1px, transparent 1px)',
        },
      });
    }),
  ],
};
