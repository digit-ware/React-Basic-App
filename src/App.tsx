import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import BookList from './components/BookList';
import Counter from './components/Counter';
import { AppContext, AppContextInterface } from './contexts/appContext';
import HelloCountry from './components/HelloCountry';

function App() {

  const [appCounter, setAppCounter] = useState(0)

  const appContext : AppContextInterface =   {
    name: 'my first app',
    counter: appCounter,
    setCounter: (value: number) => {
      setAppCounter(value)
    }
  }

  return (
    <AppContext.Provider value={appContext}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <HelloWorld />
          </p>
          <p>
            <BookList />
          </p>
          <p>
            <Counter />
          </p>
          <p>
            <HelloCountry text='Country' />
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
