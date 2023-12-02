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
const AddToBag = ({
	currency,
	description,
	image,
	price,
	name,
	price_id,
}: ProductCart) => {
	const { addItem, handleCartClick } = useShoppingCart();

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
			onClick={() => {
				addItem(product), handleCartClick();
			}}
		>
			Add To Cart
		</Button>
	);
};

export default AddToBag;
