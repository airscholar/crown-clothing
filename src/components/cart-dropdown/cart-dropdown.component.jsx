import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartHidden, selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { setToggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ toggleCartHidden, cartItems, dispatch }) => {
    const navigate = useNavigate();
    if (toggleCartHidden) return null;
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(({ ...otherProps }, idx) => (
                        <CartItem key={idx} {...otherProps} />
                    )) : <span className="empty-message">Your cart is empty!</span>
            }
        </div>
        <CustomButton onClick={() => { dispatch(setToggleCartHidden()); navigate('/checkout') }}> GO TO CHECKOUT </CustomButton>
    </div>
}

const mapStateToProps = createStructuredSelector({
    toggleCartHidden: selectCartHidden,
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown);