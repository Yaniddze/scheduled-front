import { FC } from "react";

import {
  GlobalStyles,
} from './appSetup';

export const App: FC = () => {
  return (
    <>
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
    </>
  );
}
