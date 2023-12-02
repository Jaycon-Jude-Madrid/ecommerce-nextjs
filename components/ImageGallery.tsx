"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";

interface iAppProps {
	images: any[];
}
const ImageGallery = ({ images }: iAppProps) => {
	const [bigImage, setBigImage] = React.useState(images[0]);

	const handleSmallImageClick = (image: any) => {
		setBigImage(image);
	};
	return (
		<div className="grid gap-4 lg:grid-cols-5">
			<div className="order-last flex gap-4 lg:order-none lg:flex-col">
				{images.map((image, idx) => (
					<div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
						<Image
							onClick={() => handleSmallImageClick(image)}
							src={urlFor(image).url()}
							alt={"Photo"}
							className="w-full h-full object-cover object-center cursor-pointer"
							width={200}
							height={200}
						/>
					</div>
				))}
			</div>

			<div className="relative overflow-hidden round-lg bg-gray-100 lg:col-span-4">
				<Image
					src={urlFor(bigImage).url()}
					alt={"Photo"}
					className="w-full h-full object-cover object-center cursor-pointer"
					width={500}
					height={500}
				/>
				<span className="absolute left-0 top-0 rounded-br-lg bg-red-500 text-white px-2 py-1 text-xs">
					New
				</span>
			</div>
		</div>
	);
};

export default ImageGallery;
