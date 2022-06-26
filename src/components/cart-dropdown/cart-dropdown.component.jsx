import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = state => ({
    toggleCartHidden: state.cart.toggleCartHidden,
    cartItems: selectCartItems(state),
})
export default connect(mapStateToProps)(CartDropdown);