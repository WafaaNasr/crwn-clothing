import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
    CheckoutPageContainer, CheckoutHeaderContainer,
    HeaderBlock, TotalContainer, TestWarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock><span>Product</span></HeaderBlock>
            <HeaderBlock><span>Desciprtion</span></HeaderBlock>
            <HeaderBlock><span>Quantity</span></HeaderBlock>
            <HeaderBlock><span>Price</span></HeaderBlock>
            <HeaderBlock><span>Remove</span></HeaderBlock>
        </CheckoutHeaderContainer>
        {cartItems.map(item =>
            <CheckoutItem key={item.id} cartItem={item} />
        )}

        <TotalContainer>
            <span>TOTAL: $
            {totalPrice}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
         <br />
            4242 4242 4242 4242-Exp:01/20, CVC:123
     </TestWarningContainer>
        <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
);


const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, totalPrice: selectTotalPrice });

export default connect(mapStateToProps)(CheckoutPage);