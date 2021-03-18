import { FC } from "react";

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
} from './appSetup';

import {
  Navbar,
  Footer,
} from './components';

export const App: FC = () => {
  return (
    <ReduxState>
      <div id="app"> 
        <Navbar />
        <div>
          <AppRoutes />
        </div>
        <Footer />
      </div>
      
      <GlobalStyles />
    </ReduxState>
  );
}
