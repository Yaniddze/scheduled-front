import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
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
      header: {
        color: '#e1e3e6',
        contrast: '#000'
      },
      footer: {
        color: '#5c5c63',
        contrast: '#FFF'
      },
      main: {
        color: '#FFF',
        contrast: '#000'
      },
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
};