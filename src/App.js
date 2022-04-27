import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Mint from './pages/mint';
import { ContextProvider } from './ConnectionContext';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/mint" component={Mint} />          
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
