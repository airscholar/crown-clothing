import React from 'react'

import logo from './../assets/crown-svg.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

const Header = ({ currentUser }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <img src={logo} alt='logo' className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {currentUser ?
                (<OptionLink as='div' onClick={() => auth.signOut()}>
                    <p>SIGN OUT</p>
                </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
            <CartIcon />
        </OptionsContainer>
        <CartDropdown />
    </HeaderContainer >
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser

})
export default connect(mapStateToProps)(Header);