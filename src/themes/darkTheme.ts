import { DefaultTheme } from 'styled-components';
import { DarkLeyoutPalleteColor } from './Colors';

export const darkTheme: DefaultTheme = {
  colors: {
    main: {
      color: '#62E200',
      contrast: '#000'
    },
    secondary: {
      color: '#62AA2A',
      contrast: '#000'
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
      color: '#f00',
      contrast: '#000'
    },
    linkColor: {
      color: '#000',
      contrast: '#000'
    },
    palette: {
      layout: DarkLeyoutPalleteColor
    }
  }
};