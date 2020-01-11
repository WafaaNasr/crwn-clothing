import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartDropdown } from '../../redux/cart/cart.action';

import './cart-dropdpwn.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(item => <CartItem key={item.id} item={item} />)
                :
                <span className='empty-message'> Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropdown())
        }}>Go To Checkout</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })
export default withRouter(connect(mapStateToProps)(CartDropdown));