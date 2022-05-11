import styled from "styled-components/macro";

export const DestinationSection = styled.section`
	/*--------------------------------------------------------------
>>> Home travel destination section  
----------------------------------------------------------------*/
	&.destination-section {
		padding-bottom: 100px;
	}
	@media screen and (min-width: 992px) {
		&.destination-section {
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 575px) {
		&.destination-section {
			padding-bottom: 60px;
		}
	}

	.destination-three-column .row .row {
		margin: 0;
	}
	.destination-three-column .row .row [class*="col-"] {
		padding: 7px;
	}
	.destination-three-column > .row {
		margin: 0 -7px;
	}
	.destination-three-column > .row > [class*="col-"] {
		padding: 0;
	}

	.destination-four-column .row {
		margin: 0 -7px;
	}
	.destination-four-column .row [class*="col-"] {
		padding: 7px;
	}

	.overlay-desti-item .desti-content {
		position: absolute;
		bottom: 10px;
		left: 10px;
	}
	.overlay-desti-item .desti-content h3 {
		color: #ffffff;
		margin-bottom: 4px;
	}
	.overlay-desti-item .desti-content h3 a:hover {
		color: #f56960;
	}

	.desti-item {
		background-color: #ffffff;
		box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
		padding: 8px;
		position: relative;
	}
	.desti-item .desti-image {
		position: relative;
	}
	.desti-item .desti-image:before {
		background-color: #101f46;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0.45;
	}
	.desti-item .desti-image .rating-start {
		position: absolute;
		top: 10px;
		right: 14px;
	}
	.desti-item .meta-cat a {
		display: inline-block;
		font-family: "Raleway", Sans-serif;
		font-weight: 700;
		line-height: 1.2;
		text-transform: uppercase;
		-webkit-transition: background-color 0.3s;
		-moz-transition: background-color 0.3s;
		-ms-transition: background-color 0.3s;
		-o-transition: background-color 0.3s;
		transition: background-color 0.3s;
	}
	.desti-item .meta-cat a:hover,
	.desti-item .meta-cat a:focus {
		color: #2c75ba;
	}
	.desti-item .bg-meta-cat {
		position: absolute;
		top: 30px;
		left: 30px;
	}
	.desti-item .bg-meta-cat a {
		background-color: rgba(7, 145, 190, 0.85);
		color: #ffffff;
		padding: 7px 24px;
	}
	.desti-item .bg-meta-cat a:hover,
	.desti-item .bg-meta-cat a:focus {
		background-color: rgba(245, 105, 96, 0.85);
		color: #ffffff;
	}
	.desti-item .rating-start span:before {
		color: #ffffff;
	}
	@media screen and (max-width: 991px) {
		.desti-item .desti-image img {
			width: 100%;
		}
	}

	.desti-content {
		padding: 20px;
	}
	.desti-content h3 {
		margin-bottom: 4px;
	}
	.desti-content h3 a:hover {
		color: #f56960;
	}

	.btn-wrap a {
		margin-top: 50px;
	}
	@media screen and (max-width: 575px) {
		.btn-wrap a {
			margin-top: 20px;
		}
	}
`;
