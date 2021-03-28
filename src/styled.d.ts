import 'styled-components';

type Color = {
  color: string
  contrast: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: Color
      secondary: Color
      background: {
        header: Color
        footer: Color
        main: Color
      }
      calcDarkInRgba: (opacity: number) => string
      error: Color
      linkColor: Color
    };
  }
}
