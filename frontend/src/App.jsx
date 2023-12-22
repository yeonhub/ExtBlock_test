import React from 'react';
import './assets/css/reset.css'
import ExtBlockContainer from './components/ExtBlock/ExtBlockContainer';
import ExtBlockTitleUI from './components/ExtBlock/ExtBlockTitleUI';
import ExtBlockFixed from './components/ExtBlock/ExtBlockFixed';
import ExtBlockCustom from './components/ExtBlock/ExtBlockCustom';
import { store } from './store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <ExtBlockContainer>
          <ExtBlockTitleUI />
          <ExtBlockFixed />
          <ExtBlockCustom />
        </ExtBlockContainer>
      </Provider>
    </>
  );
};

export default App;