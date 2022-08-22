import './stripe-button.styles.scss'
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J6aYwGOEWEHWWs1oMqrUk9d2jDiLpE3UqYcmYsk1GDPT2XxxP7r0yUptGkmtuodDrbpgNIJmjCNMrPoWqCv69Hk00QaUPyIu9'

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return <StripeCheckout
        name="Crown Clothing Ltd." // the pop-in header title
        description="Pay Now" // the pop-in header subtitle
        ComponentClass="div"
        amount={priceForStripe} // cents
        currency="USD"
        stripeKey={publishableKey}
        locale="en"
        email="sample@sample.com"
        shippingAddress
        billingAddress
        zipCode={true}
        token={onToken} // submit callback
    >
    </StripeCheckout>
}