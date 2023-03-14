import React from 'react';
import { Card } from 'react-bootstrap';
import './../../styles/component-styles/receiver-tracking-styles/CourierTrackingMap.css';

/**
 * Инлайн-стили - плохое решение, данный стиль нужно вынести в .css файл - ИСПРАВЛЕНО
 *
 */

function CourierTrackingMap() {
	return (
		<Card className="text-center bg-light courier-tracking-map-card">
			<Card.Header as="h4">Карта отслеживания курьера</Card.Header>
			<Card.Body></Card.Body>
		</Card>
	);
}

export default CourierTrackingMap;
