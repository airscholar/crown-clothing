import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartHidden, selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ toggleCartHidden, cartItems }) => {
    if (toggleCartHidden) return null;
    return <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(({ ...otherProps }, idx) => (
                    <CartItem key={idx} {...otherProps} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps = createStructuredSelector({
    toggleCartHidden: selectCartHidden,
    cartItems: selectCartItems,
})
export default connect(mapStateToProps)(CartDropdown);