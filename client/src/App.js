import React from 'react';
import Navbar from './components/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Register from './components/register'
import Login from './components/login'
import Alerts from './components/Alerts'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/PrivateRoute'
if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Alerts/>
      <Switch>
        <PrivateRoute exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>

      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
