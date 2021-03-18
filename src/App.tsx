import { FC } from "react";

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
} from './appSetup';

export const App: FC = () => {
  return (
    <ReduxState>
      <div id="app"> 
        <div>
          Header
        </div>
        <div>
          <AppRoutes />
        </div>
        <div>
          footer
        </div>
      </div>
      
      <GlobalStyles />
    </ReduxState>
  );
}
