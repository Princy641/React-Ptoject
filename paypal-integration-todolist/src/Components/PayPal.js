import React, { useEffect, useRef, useState } from 'react'

export default function PayPal() {
    const paypal = useRef();
    const [paymentCompleted, setPaymentCompleted] = useState(false); 


    useEffect(() => {
        //prevent rerendering
        if (paypal.current && paypal.current.childNodes.length === 0) {

        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Wooden table",
                            amount: {
                                currency_code: "USD",
                                value: 150.00
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
                setPaymentCompleted(true); 

            },
            onError: (err) => {
                console.log(err)
            }

        
        }).render(paypal.current)
 } }, []);

    return (
        <div>
            {paymentCompleted ? (
                <h3 style={{ color: 'green', marginTop: '20px' }}>
                    ✅ Payment completed successfully!
                </h3>
            ) : (
                <div ref={paypal}></div> 
            )}
        </div>
    )
}
