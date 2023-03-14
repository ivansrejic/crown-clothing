import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100; //Zato sto stripe trazi cente 
    const publishableKey = "pk_test_51MlZGvLy6mpLFSttDo9Gfp04X6SCAY25MLfQONlqQx75nN4iVL5AmhLTozNiotN4l8hzjUwAMH2q0LOLCJwA7EqC00XX2XsB6n";

    const onToken = token => {
        console.log(token);
        alert("Payment is successfull");
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton; 