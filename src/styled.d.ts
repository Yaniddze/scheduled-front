import 'styled-components';

type Color = {
  color: string
  contrast: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: Color;
      secondary: Color;
      background: Color;
      calcDarkInRgba: (opacity: number) => string;
      error: Color;
      linkColor: Color;
    };

    font: {
      normalSize: string;
      smallerSize: string;
      btnFontSize: string;

      btnFontColor: string;
    };
  }
}
