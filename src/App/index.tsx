import React from 'react';
import Header from '../components/Header';
import IconsContainer from '../components/IconsContainer';
import Patient from '../components/Patient';
import Guardian from '../components/Guardian';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <br />

      <IconsContainer />
      <br />

      <Patient />
      <br />
      <Guardian />
      <p>
        Edit <code>src/App/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
