import React from 'react';
import Body from './../components/receiver_tracking/body/Body';
import CheckTrackNumber from '../components/receiver_tracking/check_track_number/CheckTrackNumber';

function ReceiverTrackingPage() {
	const trackNumberCheck = false;
	return (
		<div className="ReceiverTrackingPage">
			{!trackNumberCheck ? <Body /> : <CheckTrackNumber />}
		</div>
	);
}

export default ReceiverTrackingPage;
