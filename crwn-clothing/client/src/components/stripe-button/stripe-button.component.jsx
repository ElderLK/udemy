import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKEy = 'pk_test_ecavYjfT4zZpyDxpgLO1Z2Kd00l5mu61Rh';

    const onToken = token => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then( resp => {
            alert('Payment successful')
        }).catch( err => {
            console.log('Payment error', JSON.parse(err));
            alert('There was a issue with your payment!. Please sure you use the correct card');
        })
    }

    return (<StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddresss
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKEy}
    />)
}

export default StripeCheckoutButton;