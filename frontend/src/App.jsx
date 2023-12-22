import React from 'react';
import ExtBlockContainer from './components/extensionBlock/ExtBlockContainer';
import ExtBlockTitle from './components/extensionBlock/ExtBlockTitle';
import ExtBlockFixed from './components/extensionBlock/ExtBlockFixed';
import ExtBlockCustom from './components/extensionBlock/ExtBlockCustom';

const App = () => {
  return (
    <>
      <ExtBlockContainer>
        <ExtBlockTitle />
        <ExtBlockFixed />
        <ExtBlockCustom />
      </ExtBlockContainer>
    </>
  );
};

export default App;