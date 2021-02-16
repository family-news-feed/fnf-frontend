import React from 'react';
import Header from '../components/Header';
import IconsContainer from '../components/IconsContainer';
import Patient from '../components/Patient';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <IconsContainer />
      <Patient />
      <p>
        Edit <code>src/App/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
