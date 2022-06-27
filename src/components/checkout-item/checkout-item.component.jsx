import { connect } from 'react-redux';
import { setDecreaseItemQuantity, setIncreaseItemQuantity, setRemoveItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, dispatch }) => (
    <div className="checkout-item">
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt="item" />
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='price'>{cartItem.price}</span>
        <span className='quantity'>
            <span className='arrow' onClick={() => dispatch(setDecreaseItemQuantity(cartItem))} >&#10092;</span>
            {cartItem.quantity}
            <span className='arrow' onClick={() => dispatch(setIncreaseItemQuantity(cartItem))}>&#10093;</span>
        </span >
        <div className='remove-button' onClick={() => dispatch(setRemoveItemFromCart(cartItem))}>&#10005;</div>
    </div >
)

export default connect()(CheckoutItem);