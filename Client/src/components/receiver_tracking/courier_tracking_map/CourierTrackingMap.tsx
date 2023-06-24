import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
// import './../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
import './../../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { IOrderMap } from '../body/types';
import { useAppDispatch } from '../../../store';
import { getCoordinate } from '../../../store/courier/actionCreators';
import { flagCoord, getsS, getse } from '../../../hooks/IsLoggedIn';
// import imCourierMarker from './../../img/courier-map/courier-marker.svg';

const CourierTrackingMap: FC<IOrderMap> = ({ trackNumber, orderStatus }) => {
	// console.log(orderId);
	// const getCoordinate = useGetCoordinate(orderId);
	// console.log('dsfdsfsdfsd', getCoordinate.e);
	const dispatch = useAppDispatch();
	const flag = flagCoord();
	if (flag === false)
		setInterval(() => {
			dispatch(getCoordinate({ trackNumber }));
		}, 10000);

	const s = getsS();
	const e = getse();

	// const getCoordinate = useGetCoordinate();
	const markers = [
		{
			geocode: [Number(e), Number(s)],
			popUp: `${e}; ${s}`
		}
	];

	const customIcon = new Icon({
		// iconUrl: require('./../../img/courier-map/courier-marker.svg'),
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/1798/1798386.png',

		iconSize: [38, 38]
	});

	return (
		<>
			{/* <div className="test-cneter">
				<button onClick={handleClick}>Get coordinate</button>
			</div> */}
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
							{/* <Polyline pathOptions={limeOptions} positions={markers.geocode} /> */}
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
