import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';

import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={() => toggleCartHidden()}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartDropdown()) });
const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount });
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);