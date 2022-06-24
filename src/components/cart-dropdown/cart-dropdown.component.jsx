import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import { CartItem } from "../cart-item/cart-item.component";

const CartDropdown = ({ toggleCartHidden, cartItems }) => {
    if (toggleCartHidden) return null;
    return <div className="cart-dropdown">
        {
            cartItems.map(({ ...otherProps }, idx) => (
                <CartItem key={idx} {...otherProps} />
            ))
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}


const mapStateToProps = state => ({
    toggleCartHidden: state.cart.toggleCartHidden,
    cartItems: state.cart.cartItems

})
export default connect(mapStateToProps)(CartDropdown);