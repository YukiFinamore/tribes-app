import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import GeneralStyles from './styles/general'
import FontStyles from './styles/fonts'

const App = ({}) => (
  <>
    <BrowserRouter>
    	<GeneralStyles />
    	<FontStyles />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
