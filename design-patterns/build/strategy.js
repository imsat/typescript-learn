"use strict";
class CreditCardPaymentMethod {
    processPayment() {
        console.log('Collection the user\'s credit card details...');
    }
}
class PaypalPaymentMethod {
    processPayment() {
        console.log('Sending the user to Paypal for verification...');
    }
}
class GooglePaymentMethod {
    processPayment() {
        console.log('Sending the user to Google for verification...');
    }
}
class CheckoutFlow {
    checkout(selectedPayment) {
        let paymentMethod = selectedPayment === 'credit-card'
            ? new CreditCardPaymentMethod()
            : selectedPayment === 'paypal'
                ? new PaypalPaymentMethod()
                : new GooglePaymentMethod();
        paymentMethod.processPayment();
    }
}
let checkoutFlow = new CheckoutFlow();
checkoutFlow.checkout('paypal');
