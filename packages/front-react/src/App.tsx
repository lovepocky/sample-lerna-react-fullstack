import React from 'react';
import './App.css';
import { ComplexStateComponent } from './domains/sample/complex-state/complex-state.component';
import { ComplexStateStore } from './domains/sample/complex-state/complex-state.store';
import { CounterDisplay } from './domains/sample/counter/counter.component';
import { Counter } from './domains/sample/counter/counter.store';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <span>shared state</span>
          <Counter.Provider initialState={10}>
            <CounterDisplay></CounterDisplay>
            <div>
              {/* nested component */}
              <CounterDisplay></CounterDisplay>
            </div>
          </Counter.Provider>
          <span>another state</span>
          <Counter.Provider initialState={1}>
            <CounterDisplay></CounterDisplay>
          </Counter.Provider>
        </div>
        <div>
          <ComplexStateStore.Provider initialState={{ age: 30, count: 0, name: "init name" }}>
            <ComplexStateComponent></ComplexStateComponent>
          </ComplexStateStore.Provider>
        </div>
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
  );
}

export default App;
