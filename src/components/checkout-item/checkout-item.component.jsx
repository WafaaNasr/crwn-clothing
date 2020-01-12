import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, clearItems, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItems(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItems: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);