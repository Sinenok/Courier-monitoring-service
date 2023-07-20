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
	orderStatus: number;
	trackNumber: string;
}

export interface ResponseData {
	items: Item[];
	total: number;
}

export interface PaginationProps {
	sentOrdersPerPage: number;
	totalOrders: number;
	paginate: Function;
}
