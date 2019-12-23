import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrenteUser } from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// import './header.styles.scss';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
          SHOP
      </OptionLink>
      <OptionLink to='/contact'>
          CONTACT
      </OptionLink>
      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        :
          <OptionLink to='/signin'>
             SIGN IN
          </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>{
      hidden ? null :
    <CartDropdown /> 
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenteUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
