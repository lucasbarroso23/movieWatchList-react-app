import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Add } from './components/Add'
import { Whatched } from './components/Whatched'
import { Whatchlist } from './components/Whatchlist'
import './App.css';
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Whatchlist />
        </Route>

        <Route path="/whatched" >
          <Whatched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
