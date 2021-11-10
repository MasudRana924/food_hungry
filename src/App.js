import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Switch,
  Route
} from "react-router-dom";

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Home/Details/Details';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider'
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/signup" >
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/details/:foodsId">
              <Details></Details>
            </PrivateRoute>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
