import React from 'react';
import { HomeComponent } from './pages/home/home.components';
import { Switch, Route, withRouter, Router } from 'react-router-dom';
import { ShopComponent } from './pages/shop/shop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import history from './history';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="wrapper">
        <Router history={history}>     
          <Switch>
            <Route exact path='/'><HomeComponent /></Route>
            <Route exact path='/shop'><ShopComponent /></Route>
          </Switch> 
        </Router>
      </div>     
    </div>
  );
}

export default withRouter(App);
