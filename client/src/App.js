import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Register from './components/register'
import Login from './components/login'
import TroopList from './components/TroopList'
import DecorList from './components/DecorsList'
import CakesList from './components/CakesList'
import CakeForm from './components/CakesForm'
import DecorForm from './components/DecorFrom'
import TroopForm from './components/TroopForm'
import Alerts from './components/Alerts'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/PrivateRoute'


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Troops" component={TroopList} />
          <Route exact path="/Decoration" component={DecorList} />
          <Route exact path="/cakes" component={CakesList} />
          <Route exact path="/Cakes" component={CakeForm} />
          <Route exact path="/decors" component={DecorForm} />
          <Route exact path="/troop" component={TroopForm} />
          {/* <Route exact path="/cakees" component={CakesList} />
          <Route exact path="/decoors" component={DecorList} />
          <Route exact path="/trroop" component={TroopList} /> */}

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
