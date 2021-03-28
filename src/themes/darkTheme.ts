import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
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
        color: '#383b40',
        contrast: '#FFF'
      },
      footer: {
        color: '#010101',
        contrast: '#FFF'
      },
      main: {
        color: '#27292D',
        contrast: '#FFF'
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
  }
};