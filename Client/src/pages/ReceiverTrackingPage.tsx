import React from 'react';
import Body from './../components/receiver_tracking/body/Body';
import CheckTrackNumber from '../components/receiver_tracking/check_track_number/CheckTrackNumber';
import { getsOrderInfo } from '../hooks/IsLoggedIn';

function ReceiverTrackingPage() {
	const trackNumberCheck = !!getsOrderInfo();

	return (
		<div className="ReceiverTrackingPage">{trackNumberCheck ? <Body /> : <CheckTrackNumber />}</div>
	);
}

export default ReceiverTrackingPage;
