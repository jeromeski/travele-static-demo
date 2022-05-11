import styled from "styled-components/macro";

export const TripSearchSection = styled.section`
	/*--------------------------------------------------------------
>>> Home travel search section  
----------------------------------------------------------------*/
	&.shape-search-section {
		padding-bottom: 100px;
		position: relative;
	}
	&.shape-search-section .slider-shape {
		/* background-image: url("../../assets/images/slider-pattern.png"); */
		background-size: cover;
		background-repeat: no-repeat;
		content: "";
		height: 144px;
		width: 100%;
		margin-top: -70px;
	}
	@media screen and (min-width: 576px) {
		&.shape-search-section .trip-search-inner {
			margin-top: -210px;
		}
	}
	@media only screen and (min-width: 915px) {
		&.shape-search-section .trip-search-inner {
			margin-top: -160px;
		}
	}
	@media only screen and (max-width: 580px) {
		&.shape-search-section {
			padding-bottom: 60px;
		}
		&.shape-search-section .trip-search-inner {
			margin-top: -230px;
		}
	}

	&.trip-search-section .trip-search-inner {
		box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.08);
		padding: 36px 40px 42px;
		position: relative;
		-webkit-align-items: flex-end;
		-moz-align-items: flex-end;
		-ms-align-items: flex-end;
		-ms-flex-align: flex-end;
		align-items: flex-end;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	&.trip-search-section .input-group {
		width: 20%;
		padding: 8px;
	}
	&.trip-search-section .input-group i {
		position: absolute;
		bottom: 25px;
		right: 25px;
	}
	&.trip-search-section .input-group.width-col-1 {
		width: 100%;
	}
	&.trip-search-section label {
		display: inline-block;
		margin-bottom: 10px;
		font-size: 15px;
		font-weight: normal;
	}
	&.trip-search-section label span {
		margin-right: 8px;
		font-size: 14px;
	}
	&.trip-search-section input:focus {
		outline: none;
	}
	&.trip-search-section input::placeholder {
		/* Firefox, Chrome, Opera */
		color: #999999;
	}
	&.trip-search-section input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #999999;
	}
	&.trip-search-section input::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #999999;
	}
	&.trip-search-section select,
	&.trip-search-section input {
		background-color: #f8f8f8;
		color: #383838;
		border: none;
		height: 50px;
		padding: 0 15px;
		width: 100%;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		-ms-box-shadow: none;
		-o-box-shadow: none;
		box-shadow: none;
		line-height: 1.6;
	}
	&.trip-search-section input[type="submit"] {
		background-color: #f56960;
		color: #ffffff;
		line-height: 1.3;
		font-weight: 600;
		margin-bottom: auto;
	}
	&.trip-search-section input[type="submit"]:hover,
	&.trip-search-section input[type="submit"]:focus {
		background-color: #2c75ba;
		color: #ffffff;
	}
	@media screen and (min-width: 576px) {
		&.trip-search-section .input-group {
			width: 50%;
		}
		&.trip-search-section .width-col-3 {
			width: 33.33%;
		}
	}
	@media only screen and (min-width: 915px) {
		&.trip-search-section .input-group {
			width: 20%;
		}
	}
	@media only screen and (max-width: 580px) {
		&.trip-search-section .input-group {
			width: 100%;
		}
		&.trip-search-section .trip-search-inner {
			padding: 20px;
		}
	}

	.home-banner-section .trip-search-section .trip-search-inner {
		color: #ffffff;
		padding: 30px;
	}
	.home-banner-section .trip-search-section .trip-search-inner input[type="submit"] {
		margin-top: 10px;
	}
`;
