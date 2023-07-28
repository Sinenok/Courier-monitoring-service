import { ItemActive } from "../courier/types";
import { IOrderMap } from "../receiver_tracking/body/types";

interface Item extends ItemActive, IOrderMap {
	productCost: number;
	productDescription: string;
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
