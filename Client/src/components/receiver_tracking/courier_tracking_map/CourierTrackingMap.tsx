import React, { FC, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
// import './../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
import './../../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { IOrderMap } from '../body/types';
import { useAppDispatch } from '../../../store';
import { getCoordinate } from '../../../store/courier/actionCreators';
import { flagCoord, getsS, getse } from '../../../hooks/IsLoggedIn';
// import imCourierMarker from './../../img/courier-map/courier-marker.svg';

const CourierTrackingMap: FC<IOrderMap> = ({ orderId }) => {
	// console.log(orderId);
	// const getCoordinate = useGetCoordinate(orderId);
	// console.log('dsfdsfsdfsd', getCoordinate.e);
	// const dispatch = useAppDispatch();
	// const flag = flagCoord();
	// if (flag === false)
	// 	setInterval(() => {
	// 		dispatch(getCoordinate({ orderId }));
	// 	}, 10000);

	// dispatch(getCoordinate({ orderId }));
	// const handleClick = () => {
	// 	dispatch(getCoordinate({ orderId }));
	// };
	// const s = getsS();
	// const e = getse();
	// console.log('ssss', Number(s));
	// console.log('eeee', Number(e));

	// const getCoordinate = useGetCoordinate();
	const markers = [
		// {
		// 	geocode: [Number(s), Number(e)],
		// 	popUp: 'Im mar 1'
		// },
		{
			geocode: [48.85, 2.3522],
			popUp: 'Im mar 2'
		},
		{
			geocode: [48.855, 2.34],
			popUp: 'Im mar 3'
		}
	];

	const customIcon = new Icon({
		// iconUrl: require('./../../img/courier-map/courier-marker.svg'),
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/1798/1798386.png',

		iconSize: [38, 38]
	});
	// const limeOptions = { color: 'lime' };

	return (
		<>
			{/* <div className="test-cneter">
				<button onClick={handleClick}>Get coordinate</button>
			</div> */}
			<Card className="text-center bg-light courier-tracking-map-card">
				<Card.Header as="h4">Карта отслеживания курьера</Card.Header>
				<Card.Body>
					<MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{markers.map((marker, index) => (
							<Marker
								key={index}
								position={[marker.geocode[0], marker.geocode[1]]}
								icon={customIcon}></Marker>
						))}
						{/* <Polyline pathOptions={limeOptions} positions={markers.geocode} /> */}
					</MapContainer>
				</Card.Body>
			</Card>
		</>
	);
};

export default CourierTrackingMap;
