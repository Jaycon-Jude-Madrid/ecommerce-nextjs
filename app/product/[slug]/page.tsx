import { fullProduct, simplifiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import AddToBag from "@/components/AddToBag";
import CheckOutNow from "@/components/CheckOutNow";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";

const getProduct = async (slug: string) => {
	const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        "slug": slug.current,
          name,
          price,
          description,
          images,
          _id,
          "categoryName": category->name,
		  price_id
      }`;
	const data = await client.fetch(query);
	return data;
};

export const dynamic = "force-dynamic";

const page = async ({ params }: { params: { slug: string } }) => {
	const data: fullProduct = await getProduct(params.slug);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="grid gap-8 md:grid-cols-2">
					<ImageGallery images={data.images} />

					<div className="md:py-8">
						<div className="mb-2 md:mb-3">
							<span className="mb-0.5 inline-block text-gray-500">
								{data.categoryName}{" "}
							</span>
							<h2 className="text-2xl text-gray-800 font-bold lg:text-3xl">
								{data.name}
							</h2>
						</div>

						<div className="mb-6 flex items-center gap-3 md:mb-10">
							<Button className="rounded-full gap-x-2">
								<span className="text-sm">4.2</span>
								<Star className="h-5 w-5" />
							</Button>
							<span className="text-sm text-gray-500 transtion duration-100">
								56 Ratings
							</span>
						</div>

						<div className="mb-4">
							<div className="flex items-end gap-2">
								<span className="text-xl font-bold text-gray-800 md:text-2xl">
									${data.price}
								</span>
								<span className="mb-0.5 text-red-500 line-through">
									${data.price + 30}
								</span>
							</div>

							<span className="text-sm text-gray-500">
								Incl. Vat plus shipping
							</span>
						</div>
						<div className="mb-6 flex items-center gap-2 text-gray-500">
							<Truck className="w-6 h-6" />
							<span className="text-sm">2-4 Day Shipping</span>
						</div>
						<div className="flex gap-2.5">
							<AddToBag
								price={data.price}
								description={data.description}
								image={data.images[0]}
								name={data.name}
								currency="USD"
								key={data._id}
								price_id={data.price_id}
							/>
							<CheckOutNow
								price={data.price}
								description={data.description}
								image={data.images[0]}
								name={data.name}
								currency="USD"
								key={data._id}
								price_id={data.price_id}
							/>
						</div>
						<p className="mt-12 text-base text-gray-500 tracking-wide">
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
