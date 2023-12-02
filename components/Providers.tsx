"use client";
import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
const CartProvider = ({ children }: { children: ReactNode }) => {
	return (
		<USCProvider
			mode="payment"
			cartMode="client-only"
			stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
			successUrl="https://ecommerce-nextjs-madrid.vercel.app/success"
			cancelUrl="https://ecommerce-nextjs-madrid.vercel.app/error"
			currency="USD"
			billingAddressCollection={false}
			shouldPersist={true}
			language="en-US"
		>
			{children}
		</USCProvider>
	);
};

export default CartProvider;
