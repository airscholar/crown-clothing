import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setToggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ShoppingIcon } from '../shopping-icon/shopping-icon.component'

import './cart-icon.styles.scss'

const CartIcon = ({ itemCount, setToggleCartHidden }) => (
    <div className="cart-icon" onClick={() => setToggleCartHidden()} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    setToggleCartHidden: (toggleCartHidden) => dispatch(setToggleCartHidden(toggleCartHidden))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);