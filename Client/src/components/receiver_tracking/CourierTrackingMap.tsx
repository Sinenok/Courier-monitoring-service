import React from 'react';
import { Card } from 'react-bootstrap';
import './../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
// import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
// import imCourierMarker from './../../img/courier-map/courier-marker.svg';

function CourierTrackingMap() {
	const markers = [
		{
			geocode: [48.86, 2.3522],
			popUp: 'Im mar 1'
		},
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
	);
}

export default CourierTrackingMap;
