import { FC } from "react";

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
  AppTheme,
} from './appSetup';

import {
  Navbar,
  Footer,
} from './components';

export const App: FC = () => {
  return (
    <ReduxState>
      <AppTheme>
        <div id="app"> 
          <Navbar />
          <div>
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </AppTheme>
      <GlobalStyles />
    </ReduxState>
  );
}
