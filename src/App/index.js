import React from 'react';
import { MainProvider } from '../MainContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <MainProvider>
      <AppUI />
    </MainProvider>
  );
}

export default App;
