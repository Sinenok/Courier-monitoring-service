import React from 'react';
import { Card } from 'react-bootstrap';
import './../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

/**
 * Инлайн-стили - плохое решение, данный стиль нужно вынести в .css файл - ИСПРАВЛЕНО
 *
 */

const defaultState = {
	center: [55.751574, 37.573856],
	zoom: 10
};

function CourierTrackingMap() {
	return (
		<Card className="text-center bg-light courier-tracking-map-card">
			<Card.Header as="h4">Карта отслеживания курьера</Card.Header>
			<Card.Body>
				<YMaps>
					<Map defaultState={defaultState} width="100%" height="700px">
						<Placemark geometry={[55.684758, 37.738521]} />
					</Map>
				</YMaps>
			</Card.Body>
		</Card>
	);
}

export default CourierTrackingMap;
