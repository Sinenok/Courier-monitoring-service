export interface IOrderTakeRequest {
	orderId: string;
}

export interface IOrderTakeResponce {
	orderId: string;
}

export interface IOrderTakesRequest {
	trackNumber: string;
}

export interface IGetCoordinateResponce {
	s: string;
	e: string;
}
