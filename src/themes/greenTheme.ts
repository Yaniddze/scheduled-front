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
      header: {
        color: '#bed1c8',
        contrast: 'black'
      },
      footer: {
        color: '#87948e',
        contrast: 'black'
      },
      main: {
        color: '#bed1c8',
        contrast: 'black'
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