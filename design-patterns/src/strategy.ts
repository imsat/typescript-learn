interface PaymentMethod {
    processPayment(): void
}

class CreditCardPaymentMethod implements PaymentMethod {
    processPayment(): void {
        console.log('Collection the user\'s credit card details...')
    }
}

class PaypalPaymentMethod implements PaymentMethod {
    processPayment(): void {
        console.log('Sending the user to Paypal for verification...')
    }
}

class GooglePaymentMethod implements PaymentMethod {
    processPayment(): void {
        console.log('Sending the user to Google for verification...')
    }
}

class CheckoutFlow {
    checkout(selectedPayment: 'credit-card' | 'paypal' | 'google-pay') {
        let paymentMethod: PaymentMethod = selectedPayment === 'credit-card'
            ? new CreditCardPaymentMethod()
            : selectedPayment === 'paypal'
                ? new PaypalPaymentMethod()
                : new GooglePaymentMethod()

        paymentMethod.processPayment()
    }
}

let checkoutFlow = new CheckoutFlow()
checkoutFlow.checkout('paypal')
