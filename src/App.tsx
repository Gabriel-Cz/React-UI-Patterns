import React from 'react';
import logo from './logo.svg';
import useHover from './hooks/useHover';
import './App.css';

function App() {
  const { HoverWrapper } = useHover();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       <HoverWrapper>
          Hover Item
       </HoverWrapper>
      </header>
    </div>
  );
}

export default App;
