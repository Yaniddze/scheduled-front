import { FC } from "react";
import { BrowserRouter } from 'react-router-dom';

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
  AppTheme,
  QueryContext,
} from './appSetup';

import {
  Navbar,
  Footer,
  Main,
} from './components';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <QueryContext>
        <ReduxState>
          <AppTheme>
            <div id="app"> 
              <Navbar />
              <Main>
                <AppRoutes />
              </Main>
              <Footer />
            </div>
          </AppTheme>
          <GlobalStyles />
        </ReduxState>
      </QueryContext>
    </BrowserRouter>
  );
}
