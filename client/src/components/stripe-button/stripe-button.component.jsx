import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {

    // Bec. Stripe accepts price in cents
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_Gp232kLKvTjQcxcx7WKXKrCT00kgZbEN11';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(err => {
            console.log('payment error', JSON.parse(err));
            alert(
                'There was an issue with your payment. Please use the provided credit card'
            )
        });
    }
    return (
        <StripeCheckout
            label='Pay Now'
            panelLabel='Pay Now'
            name='CRWN Clothing Ltd.'
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={stripePrice}
            shippingAddress
            billingAddress
            stripeKey={publishableKey}
            token={onToken}
        />);
}

export default StripeCheckoutButton;