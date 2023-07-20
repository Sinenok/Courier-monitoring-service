import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import './../../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { IOrderMap } from '../body/types';
import { useTakeCoordinate } from './behavior';

const CourierTrackingMap: FC<IOrderMap> = ({ trackNumber, orderStatus }) => {
	const { e, s } = useTakeCoordinate(trackNumber);
	const markers = [
		{
			geocode: [Number(e), Number(s)],
			popUp: `${e}; ${s}`
		}
	];

	const customIcon = new Icon({
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/1798/1798386.png',

		iconSize: [38, 38]
	});

	return (
		<>
			<Card className="text-center bg-light courier-tracking-map-card">
				<Card.Header as="h4">Карта отслеживания курьера</Card.Header>
				<Card.Body>
					{orderStatus !== 3 ? (
						<MapContainer center={[59.93863, 30.31413]} zoom={10} scrollWheelZoom={false}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							{markers.map((marker, index) => (
								<Marker
									key={index}
									position={[marker.geocode[0], marker.geocode[1]]}
									icon={customIcon}>
									<Popup>{marker.popUp}</Popup>
								</Marker>
							))}
						</MapContainer>
					) : (
						<h4 style={{ padding: '200px 0 200px 0' }}>Заказ завершен!</h4>
					)}
				</Card.Body>
			</Card>
		</>
	);
};

export default CourierTrackingMap;
