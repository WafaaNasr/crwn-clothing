import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropDownCustomBtn } from './cart-dropdpwn.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ?
                cartItems.map(item => <CartItem key={item.id} item={item} />)
                :
                <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropDownCustomBtn onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown())
        }}>Go To Checkout</CartDropDownCustomBtn>
    </CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })
export default withRouter(connect(mapStateToProps)(CartDropdown));