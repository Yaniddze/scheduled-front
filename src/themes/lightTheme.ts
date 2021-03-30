import { DefaultTheme } from 'styled-components';
import { LightLeyoutPalleteColor } from './Colors';

export const lightTheme: DefaultTheme = {
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
      color: '#f00',
      contrast: '#000'
    },
    linkColor: {
      color: '#000',
      contrast: '#000'
    },
    palette: {
      layout: LightLeyoutPalleteColor
    }
  },

};