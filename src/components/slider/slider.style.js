import styled from "styled-components/macro";

export const SliderSection = styled.section`
	/*--------------------------------------------------------------
>>> Home slider section  
----------------------------------------------------------------*/
	.slick-slider {
		position: relative;
	}
	.slick-slider .slick-prev {
		left: 15px;
	}
	.slick-slider .slick-prev:before {
		content: "";
	}
	.slick-slider .slick-next {
		right: 15px;
	}
	.slick-slider .slick-next:before {
		content: "";
	}
	.slick-slider .slick-prev,
	.slick-slider .slick-next {
		z-index: 1;
		width: auto;
		height: auto;
	}
	.slick-slider .slick-prev:before,
	.slick-slider .slick-next:before {
		background-color: rgba(0, 0, 0, 0.8);
		color: #ffffff;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		-ms-border-radius: 100%;
		border-radius: 100%;
		display: block;
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		height: 40px;
		width: 40px;
		text-align: center;
		line-height: 40px;
		-webkit-transition: background-color 0.4s;
		-moz-transition: background-color 0.4s;
		-ms-transition: background-color 0.4s;
		-o-transition: background-color 0.4s;
		transition: background-color 0.4s;
	}
	.slick-slider .slick-prev:hover:before,
	.slick-slider .slick-prev:focus:before,
	.slick-slider .slick-prev:active:before,
	.slick-slider .slick-next:hover:before,
	.slick-slider .slick-next:focus:before,
	.slick-slider .slick-next:active:before {
		background-color: #2c75ba;
		color: #ffffff;
	}

	.slick-dots {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.slick-dots li {
		width: auto;
		height: auto;
		margin: 0 6px;
	}
	.slick-dots li button {
		background-color: #c6c6c6;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		-ms-border-radius: 100%;
		border-radius: 100%;
		width: 10px;
		height: 10px;
	}
	.slick-dots li button:before {
		display: none;
	}
	.slick-dots li button:hover {
		background-color: #0791be;
	}
	.slick-dots li.slick-active button {
		background-color: #0791be;
	}

	.home-slider .slick-dots {
		bottom: 100px;
	}
	.home-slider .slick-arrow {
		-webkit-transition: linear 0.6s;
		-moz-transition: linear 0.6s;
		-ms-transition: linear 0.6s;
		-o-transition: linear 0.6s;
		transition: linear 0.6s;
		opacity: 0;
	}
	.home-slider .slick-arrow:before {
		font-size: 15px;
		width: 45px;
		height: 45px;
		line-height: 45px;
	}
	.home-slider .slick-prev {
		left: -100px;
	}
	.home-slider .slick-next {
		right: -100px;
	}
	.home-slider:hover .slick-arrow {
		opacity: 1;
	}
	.home-slider:hover .slick-prev {
		left: 15px;
	}
	.home-slider:hover .slick-next {
		right: 15px;
	}
	@media screen and (max-width: 575px) {
		.home-slider .slick-arrow:before {
			width: 30px;
			height: 30px;
			line-height: 30px;
			font-size: 11px;
		}
	}

	.home-slider {
		position: relative;
		overflow: hidden;
	}
	.home-slider .home-banner-items .banner-content-wrap {
		padding-bottom: 230px;
	}
	.home-slider .banner-content {
		margin-left: auto;
		margin-right: auto;
		max-width: 75%;
	}

	.banner-inner-wrap {
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-ms-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.home-banner-items {
		position: relative;
	}
	.home-banner-items .banner-content-wrap {
		padding-bottom: 140px;
		padding-top: 230px;
	}
	.home-banner-items .banner-content {
		margin-left: auto;
		margin-right: auto;
		position: relative;
		z-index: 1;
	}
	.home-banner-items .banner-content .banner-title {
		font-size: 80px;
		color: #ffffff;
		line-height: 1.1;
		font-weight: 900;
		margin-bottom: 30px;
	}
	.home-banner-items .banner-content p {
		color: #ffffff;
		margin-bottom: 45px;
	}
	.home-banner-items .banner-content .slider-button {
		margin-left: -10px;
		margin-right: -10px;
	}
	.home-banner-items .banner-content .slider-button a {
		margin: 10px;
	}
	.home-banner-items .overlay {
		background-color: rgba(21, 21, 21, 0.51);
	}
	@media screen and (max-width: 991px) {
		.home-banner-items .banner-content .banner-title {
			font-size: 50px;
		}
	}
	@media screen and (max-width: 767px) {
		.home-banner-items .banner-content .banner-title {
			font-size: 45px;
		}
	}
	@media screen and (max-width: 575px) {
		.home-banner-items .banner-content-wrap {
			padding-top: 190px;
		}
		.home-banner-items .banner-content {
			max-width: 90%;
		}
		.home-banner-items .banner-content .banner-title {
			font-size: 32px;
		}
	}

	.home-banner-section {
		padding-bottom: 100px;
	}
	@media screen and (max-width: 575px) {
		.home-banner-section {
			padding-bottom: 60px;
		}
		.home-banner-section .banner-content-wrap {
			padding-bottom: 60px;
		}
		.home-banner-section .banner-content-wrap .slider-button {
			margin-left: -5px;
			margin-right: -5px;
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-flex-wrap: wrap;
			-moz-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		}
		.home-banner-section .banner-content-wrap .slider-button a {
			padding: 10px 15px;
			text-align: center;
			margin: 5px;
			-webkit-flex-grow: 1;
			-moz-flex-grow: 1;
			-ms-flex-grow: 1;
			flex-grow: 1;
		}
	}
`;
