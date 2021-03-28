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
  Container,
} from './components';

export const App: FC = () => {
  return (
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
  );
}
