import React from 'react';
import './../styles/pages-styles/Footer.css';
import { Container } from 'react-bootstrap';
import imgMainLogo from './../img/logo/logoNav.png';
import imgVk from './../img/logo/vk.svg';
import imgTg from './../img/logo/tg.svg';
import { Link } from 'react-router-dom';

function Footer() {
	const handleLinkClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="footer bg-dark text-light text-center">
			<Container className="cont">
				<div className="wrapper">
					<div className="footer-card-wrap flexx">
						<Link to="/" onClick={handleLinkClick}>
							<img className="logo-img" src={imgMainLogo} alt="" />
						</Link>
					</div>
					<div className="footer-card-wrap flexx">
						<div className="footer-category">Телефон</div>
						<a href="tel:+7(953)382-29-30">
							<div>+7 953 382-29-30</div>
						</a>
					</div>
					<div className="footer-card-wrap flexx">
						<div className="footer-category">Почта</div>
						<a href="mailto:sinenok.ivan@mail.ru">
							<div>sinenok.ivan@mail.ru</div>
						</a>
					</div>
					<div className="footer-card-wrap flexx">
						<div className="footer-category">Telegram</div>
						<a target="_blank" rel="noreferrer" href="https://t.me/ivan4ich">
							<div className="element-wrap">
								<div className="element-wrap__social">
									<img className="tg-img img-el" src={imgTg} alt="" />
								</div>
								<div>@ivan4ich</div>
							</div>
						</a>
					</div>
					<div className="footer-card-wrap flexx">
						<div className="footer-category">ВКонтакте</div>
						<a target="_blank" rel="noreferrer" href="https://vk.com/id157653344">
							<div className="element-wrap">
								<div className="element-wrap__social">
									<img className="vk-img img-el" src={imgVk} alt="" />
								</div>
								<div>@id157653344</div>
							</div>
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Footer;
