import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import { getsS, getse } from '../../../hooks/IsLoggedIn';

function LocationMarker() {
	const s = Number(getsS());
	const e = Number(getse());
	const [es, setE] = useState(e);
	const [se, setS] = useState(s);
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			setE(e.target);
			map.flyTo(e.target, map.getZoom());
		}
	});

	return es === null && se === null ? null : <Marker position={[es, se]}></Marker>;
}

export default LocationMarker;
