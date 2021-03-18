import { FC } from "react";

import {
  GlobalStyles,
  ReduxState,
} from './appSetup';

export const App: FC = () => {
  return (
    <ReduxState>
      <div id="app"> 
        <div>
          Header
        </div>
        <div>
          main
        </div>
        <div>
          footer
        </div>
      </div>
      
      <GlobalStyles />
    </ReduxState>
  );
}
