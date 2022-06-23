import './cart-item.styles.scss';

export const CartItem = ({ imageUrl, name, quantity, price }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="cart-item"></img>
        <div className="item-details">
            <h2 className="name">{name}</h2>
            <span> {quantity} x ${price}</span>
        </div>
    </div >
)