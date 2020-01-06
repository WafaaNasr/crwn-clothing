import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdpwn.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton >Go To Checkout</CustomButton>
    </div>
);
const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })
export default connect(mapStateToProps)(CartDropdown);