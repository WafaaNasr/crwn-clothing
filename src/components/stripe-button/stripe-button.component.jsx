import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {

    // Bec. Stripe accepts price in cents
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_Gp232kLKvTjQcxcx7WKXKrCT00kgZbEN11';

    const onToken = token => {
        console.log(token)
        alert('Payment successful');
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