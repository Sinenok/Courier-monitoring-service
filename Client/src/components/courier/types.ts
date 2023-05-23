interface Item {
	orderId: string;
	senderName: string;
	senderAddress: string;
	receiverName: string;
	receiverAddress: string;
	deliveryCost: number;
	paymentMethod: number;
	productWeight: number;
}

export interface ResponseDataActiveOrders {
	items: Item[];
	total: number;
}

