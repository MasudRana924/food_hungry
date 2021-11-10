import './App.css';
import React from "react";
import {
  BrowserRouter as Router,Switch,
  Route
} from "react-router-dom";

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Home/Details/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" element={<Home />}>
            <Home></Home>
          </Route>
          <Route path="/home" element={<Home />}>
          <Home></Home>
            </Route>
            <Route path="/details/:foodsId">
             <Details></Details>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
