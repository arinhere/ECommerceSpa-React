import React, { Component } from 'react';
import { HomeComponent } from './pages/home/home.pages';
import { Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar/navbar.component';
import ShopComponent from './pages/shop/shop.pages';
import LoginRegistrationComponent from './pages/login-registration/login-registration.pages';
import { auth, createUserProfileDocument } from './config/firebase/firebase.util';
import { connect } from 'react-redux';
import setCurrentUser from './config/redux/actions/users.actions';

class App extends Component {
  userSubscription = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.userSubscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.userSubscription(); // Unsubscribe while the component unmount
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="wrapper">
          <Switch>
            <Route exact path='/'><HomeComponent /></Route>
            <Route exact path='/shop'><ShopComponent /></Route>
            <Route exact path='/login'><LoginRegistrationComponent /></Route>
          </Switch> 
        </div>     
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
