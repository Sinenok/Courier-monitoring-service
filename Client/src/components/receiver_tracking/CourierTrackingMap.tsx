import React from 'react';
import { Card } from 'react-bootstrap';

/** 
 * Инлайн-стили - плохое решение, данный стиль нужно вынести в .css файл
 * 
*/

function CourierTrackingMap() {
	return (
		<Card style={{ height: '700px' }} className="text-center bg-light">
			<Card.Header as="h4">Карта отслеживания курьера</Card.Header>
			<Card.Body></Card.Body>
		</Card>
	);
}

export default CourierTrackingMap;
