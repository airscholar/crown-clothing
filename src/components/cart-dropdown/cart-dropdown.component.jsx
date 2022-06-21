import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ toggleCartHidden }) => {
    if (toggleCartHidden) return null;
    return <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}


const mapStateToProps = state => ({
    toggleCartHidden: state.cart.toggleCartHidden
})
export default connect(mapStateToProps)(CartDropdown);