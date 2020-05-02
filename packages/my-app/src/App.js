import React from 'react';
import './App.css';

import Component from '@monorepo/common/components/Component'
import Image from '@monorepo/common/components/Image'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component />
      </header>
    </div>
  );
}

export default App;
