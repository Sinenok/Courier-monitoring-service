export interface ItemActive {
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
	items: ItemActive[];
	total: number;
}

