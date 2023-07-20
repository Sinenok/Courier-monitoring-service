import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './../styles/pages-styles/MainPage.css';
import imgRegistration from './../img/registration.svg';
import imgAuthorization from './../img/auth.png';
import imgInputTrackNumber from './../img/inputTrack.png';
import imgOrderInforamtion from './../img/orderTrack.png';
import imgOrderForm from './../img/orderForm.png';
import imgAdminControl from './../img/adminControl.png';
import RegistrationPage from './RegistrationPage';
import imgFlowers from './../img/flowers.png';
import imgGifts from './../img/gifts.png';
import imgFood from './../img/food.png';
import imgProducts from './../img/products.png';
import imgMedicines from './../img/medicines.png';
import imgClothes from './../img/clothes.png';
import imgDocuments from './../img/documents.png';
import imgTech from './../img/tech.png';
import imgOrderSend from './../img/slider/new/orderSend.jpg';
import imgOrderTracking from './../img/slider/new/orderTracking.jpg';
import imgOrderAdmin from './../img/slider/new/orderAdmin.jpg';

function Main() {
	return (
		<div className="main-body">
			<Carousel variant="dark" className="carousel-wrap">
				<Carousel.Item className="carousel__item" interval={4000}>
					<img className="carousel__img d-block w-100" src={imgOrderSend} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item className="carousel__item" interval={4000}>
					<img className="carousel__img d-block w-100" src={imgOrderTracking} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item className="carousel__item" interval={4000}>
					<img className="carousel__img d-block w-100" src={imgOrderAdmin} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
			<Container className="text-center pt-5">
				<h1>Простой и удобный сервис для отслеживания и управления курьерами и заказами</h1>
			</Container>
			<Container className="text-center pt-5">
				<h2 className="pb-4">Как это работает?</h2>
				<h3>Если вы заказали товар в магизине</h3>
			</Container>
			<div className="flex instr__container">
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgRegistration} alt="" />
						</div>
						<div className="text-description">Зарегистрируйтесь на сайте</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgAuthorization} alt="" />
						</div>
						<div className="text-description">Авторизируйтесь на сайте</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgInputTrackNumber} alt="" />
						</div>
						<div className="text-description">Введите номер отслеживания</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgOrderInforamtion} alt="" />
						</div>
						<div className="text-description">
							Получайте полную <br /> информацию о вашем заказе
						</div>
					</div>
				</div>
			</div>
			<Container className="text-center">
				<h3>Если вы хотите отправлять заказы</h3>
			</Container>
			<div className="flex instr__container">
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgRegistration} alt="" />
						</div>
						<div className="text-description">Зарегистрируйтесь на сайте</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgAuthorization} alt="" />
						</div>
						<div className="text-description">Авторизируйтесь на сайте</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgOrderForm} alt="" />
						</div>
						<div className="text-description">Заполните форму отправления заказа</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgOrderInforamtion} alt="" />
						</div>
						<div className="text-description">
							Получайте полную <br /> информацию о вашем заказе
						</div>
					</div>
				</div>
			</div>
			<Container className="text-center">
				<h3>Если вы хотите администрировать своими заказами и курьерами</h3>
			</Container>
			<div className="flex instr__container">
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgRegistration} alt="" />
						</div>
						<div className="text-description">Зарегистрируйтесь на сайте как администратор</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgAuthorization} alt="" />
						</div>
						<div className="text-description">Авторизируйтесь на сайте</div>
					</div>
				</div>
				<div className="instr__item__wrapper">
					<div className="instr__item">
						<div className="pictr">
							<img src={imgAdminControl} alt="" />
						</div>
						<div className="text-description">
							Управляйте курьерами и <br /> администриуйте все ваши заказы
						</div>
					</div>
				</div>
			</div>
			<div className="reg">
				<Container className="text-center pt-2">
					<h2>Пользуйтесь нашим сервисом уже сейчас!</h2>
				</Container>
				<RegistrationPage />
			</div>
			<Container className="text-center pt-3">
				<h2 className="pb-4">Помогаем вам доставлять</h2>
			</Container>
			<div className="flex product__container">
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgFlowers} alt="" />
						</div>
						<div className="text-description pt-3">Цветы</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgGifts} alt="" />
						</div>
						<div className="text-description pt-3">Подарки</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgFood} alt="" />
						</div>
						<div className="text-description pt-3">Еду</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgProducts} alt="" />
						</div>
						<div className="text-description pt-3">Продукты</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgMedicines} alt="" />
						</div>
						<div className="text-description pt-3">Лекарства</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgClothes} alt="" />
						</div>
						<div className="text-description pt-3">Одежду</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgDocuments} alt="" />
						</div>
						<div className="text-description pt-3">Документы</div>
					</div>
				</div>
				<div className="product__item__wrapper">
					<div className="product__item">
						<div className="pictr">
							<img src={imgTech} alt="" />
						</div>
						<div className="text-description pt-3">Документы</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
