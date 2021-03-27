import { DefaultTheme } from 'styled-components';

export const greenTheme: DefaultTheme = {
  colors: {
    main: {
      color: '#62E200',
      contrast: 'black'
    },
    secondary: {
      color: '#62AA2A',
      contrast: 'black'
    },
    background: {
      color: '#bed1c8',
      contrast: 'black'
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

    btnFontColor: 'black',
  },
};