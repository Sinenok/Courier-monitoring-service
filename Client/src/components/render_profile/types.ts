interface Item {
	senderName: string;
	senderAddress: string;
	receiverName: string;
	receiverAddress: string;
	deliveryCost: number;
	paymentMethod: number;
	productCost: number;
	productDescription: string;
	productWeight: number;
}

export interface ResponseData {
	items: Item[];
	total: number;
}
