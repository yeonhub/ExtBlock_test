import React from 'react';
import './assets/css/reset.css'
import ExtBlockContainer from './components/ExtBlock/ExtBlockContainer';
import ExtBlockTitleUI from './components/ExtBlock/ExtBlockTitleUI';
import ExtBlockFixed from './components/ExtBlock/ExtBlockFixed/ExtBlockFixed';
import ExtBlockCustom from './components/ExtBlock/ExtBlockCustom/ExtBlockCustom';
import { store } from './store'
import { Provider } from 'react-redux'
import ExtBlockTitlePopup from './components/ExtBlock/ExtBlockTitlePopup';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <ExtBlockContainer>
          <ExtBlockTitleUI />
          <ExtBlockTitlePopup />
          <ExtBlockFixed />
          <ExtBlockCustom />
        </ExtBlockContainer>
      </Provider>
    </>
  );
};

export default App;