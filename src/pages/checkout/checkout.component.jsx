import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'><span>Product</span></div>
            <div className='header-block'><span>Desciprtion</span></div>
            <div className='header-block'><span>Quantity</span></div>
            <div className='header-block'><span>Price</span></div>
            <div className='header-block'><span>Remove</span></div>
        </div>
        {cartItems.map(item =>
            <CheckoutItem key={item.id} cartItem={item} />
        )}

        <div className='total'>
            <span>TOTAL: $
            {totalPrice}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
         <br />
            4242 4242 4242 4242-Exp:01/20, CVC:123
     </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
);


const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, totalPrice: selectTotalPrice });

export default connect(mapStateToProps)(CheckoutPage);