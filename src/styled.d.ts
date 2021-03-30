import 'styled-components';
import { PalleteColor } from './themes/Colors';

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

      palette: {
        [k: string]: PalleteColor
      }
    };
  }
}
