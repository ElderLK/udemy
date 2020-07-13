import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrenteUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <GlobalStyle />
        <Header/>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/signin' render={() => this.props.currentUser ?
              (<Redirect to='/' />)
              : (<SignInAndSignUp />) }/>
            </Suspense>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenteUser
});

const mapDispatchToProps = (dispatch)  => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
