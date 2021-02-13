import React from 'react';
import Header from '../components/Header';
import IconsContainer from '../components/IconsContainer';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <IconsContainer />
      <p>
        Edit <code>src/App/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
