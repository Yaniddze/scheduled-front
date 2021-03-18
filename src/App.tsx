import { FC } from "react";

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
} from './appSetup';

import {
  Navbar,
} from './components';

export const App: FC = () => {
  return (
    <ReduxState>
      <div id="app"> 
        <Navbar />
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
