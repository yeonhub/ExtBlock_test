import React from 'react';
import './assets/css/reset.css'
import ExtBlockContainer from './components/ExtBlock/ExtBlockContainer';
import ExtBlockTitleUI from './components/ExtBlock/ExtBlockTitleUI';
import ExtBlockFixed from './components/ExtBlock/ExtBlockFixed';
import ExtBlockCustom from './components/ExtBlock/ExtBlockCustom';

const App = () => {
  return (
    <>
      <ExtBlockContainer>
        <ExtBlockTitleUI />
        <ExtBlockFixed />
        <ExtBlockCustom />
      </ExtBlockContainer>
    </>
  );
};

export default App;