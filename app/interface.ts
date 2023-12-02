export interface simplifiedProduct {
	_id: string;
	imageUrl: string;
	price: number;
	name: string;
	slug: string;
	categoryName: string;
	description?: string;
}

export interface fullProduct {
	_id: string;
	images: any[];
	price: number;
	name: string;
	slug: string;
	categoryName: string;
	description: string;
	price_id: string;
}
