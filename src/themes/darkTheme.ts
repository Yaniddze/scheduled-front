import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  colors: {
    main: {
      color: '#2c2533',
      contrast: 'white'
    },
    secondary: {
      color: '#32075e',
      contrast: 'white'
    },
    background: {
      color: '#2c2533',
      contrast: 'white'
    },
    calcDarkInRgba: ((opacity: number): string => `rgba(64,147,0,${opacity})`),
    error: {
      color: 'red',
      contrast: 'black'
    },
    linkColor: {
      color: 'black',
      contrast: 'black'
    },
  },

  font: {
    btnFontSize: '15px',
    smallerSize: '13px',
    normalSize: '16px',

    btnFontColor: 'white',
  },
};