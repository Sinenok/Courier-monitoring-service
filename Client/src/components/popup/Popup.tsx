import React, { FC } from 'react';
import './../../styles/component-styles/Popup.css';
import { Form, InputGroup, Col, Row, Button } from 'react-bootstrap';
import { useOrderRating } from './bahavior';
import { isOrderRate } from '../../hooks/IsLoggedIn';
import { IPopup } from './types';
import imgClose from './../../img/close.svg';

const Popup: FC<IPopup> = ({ show, handleClose }) => {
	const showHideClassName = show ? 'popup display-block' : 'popup display-none';
	const { courierRating, setCourierRating, productRating, setProductRating, handleSubmit } =
		useOrderRating();
	const orderRate = isOrderRate();

	return (
		<div className={showHideClassName}>
			<section className="popup-main">
				{!orderRate ? (
					<>
						<h2 className="popup-title">Оцените доставку</h2>
						<Form onSubmit={handleSubmit}>
							<Row className="">
								<Form.Group lg="12" as={Col} className="mb-3" controlId="formGroupCourierRating">
									<Form.Label>Оценка курьера</Form.Label>
									<InputGroup>
										<Form.Control
											required
											name="courierRating"
											placeholder="Поствьте курьеру оценку от 1 до 5"
											type="number"
											step="1"
											min="1"
											max="5"
											value={courierRating}
											onChange={(e) => setCourierRating(e.target.value)}
										/>
									</InputGroup>
								</Form.Group>
							</Row>
							<Row className="">
								<Form.Group lg="12" as={Col} className="mb-3" controlId="formGroupProductRating">
									<Form.Label>Оценка товара</Form.Label>
									<InputGroup>
										<Form.Control
											required
											name="productRating"
											placeholder="Поствьте курьеру товару от 1 до 5"
											type="number"
											step="1"
											min="1"
											max="5"
											value={productRating}
											onChange={(e) => setProductRating(e.target.value)}
										/>
									</InputGroup>
								</Form.Group>
							</Row>
							<Row lg="12" className="justify-content-md-center mb-4">
								<Button variant="primary" type="submit">
									Поставить оценку
								</Button>
							</Row>
						</Form>
					</>
				) : (
					<h2>Спасибо за оценку!</h2>
				)}

				<button className="close-button" onClick={handleClose}>
					<img className="close-img" src={imgClose} alt="" />
				</button>
			</section>
		</div>
	);
};

export default Popup;
