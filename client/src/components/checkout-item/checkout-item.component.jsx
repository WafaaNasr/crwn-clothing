import React from 'react';

import { connect } from 'react-redux';
import {
    clearItemFromCart, addItem, removeItem
} from '../../redux/cart/cart.action';

import {
    CheckoutItemContainer, ImageContainer, ItemDetail,
    ItemQuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItems, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <ItemDetail>{name}</ItemDetail>
            <ItemQuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </ItemQuantityContainer>
            <ItemDetail>{price}</ItemDetail>
            <RemoveButtonContainer onClick={() => clearItems(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItems: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);