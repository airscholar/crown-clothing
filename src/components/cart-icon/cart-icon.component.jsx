import { connect } from "react-redux";
import { setToggleCartHidden } from "../../redux/cart/cart.actions";
import { ShoppingIcon } from '../shopping-icon/shopping-icon.component'

import './cart-icon.styles.scss'

const CartIcon = ({ itemCount, setToggleCartHidden }) => (
    <div className="cart-icon" onClick={() => setToggleCartHidden()} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{0}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: state.cart.itemCount
})
const mapDispatchToProps = dispatch => ({
    setToggleCartHidden: (toggleCartHidden) => dispatch(setToggleCartHidden(toggleCartHidden))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);