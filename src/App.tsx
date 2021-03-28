import { FC } from "react";
import { BrowserRouter } from 'react-router-dom';

import {
  GlobalStyles,
  ReduxState,
  AppRoutes,
  AppTheme,
} from './appSetup';

import {
  Navbar,
  Footer,
  Container,
} from './components';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ReduxState>
        <AppTheme>
          <div id="app"> 
            <Navbar />
            <div>
              <Container>
                <AppRoutes />
              </Container>
            </div>
            <Footer />
          </div>
        </AppTheme>
        <GlobalStyles />
      </ReduxState>
    </BrowserRouter>
  );
}
