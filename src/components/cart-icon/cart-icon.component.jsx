import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={() => toggleCartHidden()}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);
const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartDropdown()) });
const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount });
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);