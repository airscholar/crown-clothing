import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/crown-svg.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser }) => (
    < div className='header' >
        <Link className='logo-container' to="/">
            <img src={logo} alt='logo' className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ? <div className='option sign-out' onClick={() => auth.signOut()}>
                    <p>SIGN OUT</p>
                </div> :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>

        <CartDropdown />
    </div >
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser

})
export default connect(mapStateToProps)(Header);