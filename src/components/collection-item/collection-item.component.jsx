import React from 'react';
import { connect } from 'react-redux';
import { setAddNewItem } from '../../redux/cart/cart.actions';
import { CustomButton } from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

export const CollectionItem = ({ item, setAddNewItem }) => {
    const { name, imageUrl, price } = item;

    return (
        <div className='collection-item'>
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => setAddNewItem(item)}>Add to cart</CustomButton>
        </div >
    )
}
const mapDispatchToProps = dispatch => ({
    setAddNewItem: addNewItem => dispatch(setAddNewItem(addNewItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);