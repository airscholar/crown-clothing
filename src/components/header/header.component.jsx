import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../assets/crown-svg.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

export const Header = ({ user }) => (
    <div className='header'>
        {console.log({ user })}
        <Link className='logo-container' to="/">
            <img src={logo} alt='logo' className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                user ? <div className='option sign-out' onClick={() => auth.signOut()}>
                    <p>SIGN OUT</p>
                </div> :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)