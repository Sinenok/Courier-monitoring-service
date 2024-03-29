export interface IOrderTakeRequest {
	orderId: string;
}

export interface IOrderTakeResponce extends IOrderTakeRequest {}

export interface IOrderTakesRequest {
	trackNumber: string;
}

export interface IGetCoordinateResponce {
	s: string;
	e: string;
}
