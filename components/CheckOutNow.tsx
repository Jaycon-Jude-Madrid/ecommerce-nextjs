"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";

export interface ProductCart {
	name: string;
	description: string;
	price: number;
	currency: string;
	image: any;
	price_id: string;
}
const CheckOutNow = ({
	currency,
	description,
	image,
	price,
	name,
	price_id,
}: ProductCart) => {
	const { checkoutSingleItem } = useShoppingCart();

	const buyNow = (priceId: string) => {
		checkoutSingleItem(priceId);
	};

	const product = {
		currency,
		description,
		image: urlFor(image).url(),
		price,
		name,
		price_id: price_id,
	};
	return (
		<Button
			variant="secondary"
			onClick={() => {
				buyNow(product.price_id);
			}}
		>
			Checkout now
		</Button>
	);
};

export default CheckOutNow;
