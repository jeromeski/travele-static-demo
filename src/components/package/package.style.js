import styled from "styled-components/macro";

export const PackageSection = styled.section`
	/*--------------------------------------------------------------
>>> Home travel packages section  
----------------------------------------------------------------*/
	.rating-start {
		display: block;
		position: relative;
		font-size: 15px;
	}
	.rating-start:before {
		color: #ccd6df;
		content: "";
		display: block;
		font-family: "Font Awesome 5 free";
		font-weight: 900;
	}
	.rating-start span {
		display: block;
		left: 0;
		overflow: hidden;
		position: absolute;
		top: 0;
	}
	.rating-start span:before {
		color: #f56960;
		content: "";
		display: inline-block;
		font-family: "Font Awesome 5 free";
		font-weight: 900;
	}

	&.package-section {
		padding-bottom: 100px;
	}
	@media screen and (max-width: 991px) {
		&.package-section {
			padding-bottom: 70px;
		}
	}
	@media screen and (max-width: 575px) {
		&.package-section {
			padding-bottom: 60px;
		}
	}

	.package-inner .row {
		margin: 0 -12px;
	}
	.package-inner .row [class*="col-"] {
		padding-left: 12px;
		padding-right: 12px;
	}

	.package-wrap {
		box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.05);
		margin-bottom: 24px;
		position: relative;
	}
	.package-wrap .package-content {
		padding: 0 30px 0;
	}
	.package-wrap .package-content .btn-wrap {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		border-top: 1px solid rgba(175, 175, 175, 0.1);
		text-align: center;
		margin-left: -30px;
		margin-right: -30px;
		margin-top: 27px;
	}
	.package-wrap .package-content .btn-wrap a {
		color: #383838;
		display: block;
		margin-top: 0;
		padding: 16px 0;
		width: 100%;
	}
	.package-wrap .package-content .btn-wrap a.width-6 {
		width: 50%;
	}
	.package-wrap .package-content .btn-wrap a + a {
		border-left: 1px solid rgba(175, 175, 175, 0.1);
	}
	.package-wrap .package-content .btn-wrap a [class*="fa-"] {
		color: #f56960;
		font-size: 13px;
		margin-left: 8px;
	}
	.package-wrap .package-content .btn-wrap a:hover,
	.package-wrap .package-content .btn-wrap a:focus,
	.package-wrap .package-content .btn-wrap a:active {
		color: #0791be;
	}
	.package-wrap .package-content .btn-wrap a:hover [class*="fa-"],
	.package-wrap .package-content .btn-wrap a:focus [class*="fa-"],
	.package-wrap .package-content .btn-wrap a:active [class*="fa-"] {
		color: #0791be;
	}
	.package-wrap .package-content .btn-wrap a:hover [class*="fa-"]:before,
	.package-wrap .package-content .btn-wrap a:focus [class*="fa-"]:before,
	.package-wrap .package-content .btn-wrap a:active [class*="fa-"]:before {
		font-weight: 900;
	}
	.package-wrap .review-area {
		margin-bottom: 15px;
	}
	.package-wrap .review-area .review-text {
		font-size: 13px;
		color: #787878;
		line-height: 1.1;
	}
	.package-wrap .rating-start {
		display: inline-block;
		margin-left: 5px;
	}
	.package-wrap .package-price {
		background-color: #f56960;
		position: absolute;
		top: 20px;
		right: 0;
	}
	.package-wrap .package-price h6 {
		color: #ffffff;
		font-size: 13px;
		font-family: "Open Sans", sans-serif;
		line-height: 1.1;
		margin-bottom: 0;
		padding: 8px 16px;
	}
	.package-wrap .package-price h6 span {
		font-family: "Raleway", sans-serif;
		font-size: 22px;
		font-weight: 700;
		line-height: 1.2;
	}
	@media screen and (max-width: 991px) {
		.package-wrap {
			margin-bottom: 30px;
		}
		.package-wrap .feature-image img {
			width: 100%;
		}
	}
	@media screen and (max-width: 575px) {
		.package-wrap .package-content {
			padding: 0 20px 0;
		}
		.package-wrap .package-content .btn-wrap {
			margin-left: -20px;
			margin-right: -20px;
		}
	}

	.package-meta {
		background-color: #0791be;
		margin-bottom: 25px;
		margin-left: 30px;
		margin-right: 30px;
		margin-top: -25px;
		padding: 15px 0;
		position: relative;
	}
	.package-meta ul {
		font-size: 0;
		margin: 0;
		padding: 0;
	}
	.package-meta ul li {
		color: #ffffff;
		display: inline-block;
		font-size: 13px;
		line-height: 1.1;
		padding: 0 12px;
		position: relative;
	}
	.package-meta ul li [class*="fa-"] {
		margin-right: 4px;
	}
	.package-meta ul li:before {
		color: #bbbbbb;
		content: "|";
		line-height: 0.8;
		position: absolute;
		right: -3px;
		top: 0;
	}
	.package-meta ul li:first-child {
		padding-left: 0;
	}
	.package-meta ul li:last-child {
		padding-right: 0;
	}
	.package-meta ul li:last-child:before {
		display: none;
	}
	@media screen and (max-width: 575px) {
		.package-meta {
			margin-left: 10px;
			margin-right: 10px;
			margin-bottom: 20px;
		}
	}

	&.package-section.bg-light-grey {
		padding-top: 100px;
		margin-top: 50px;
	}
	@media screen and (max-width: 991px) {
		&.package-section.bg-light-grey {
			padding-top: 70px;
			margin-top: 0;
		}
	}
	@media screen and (max-width: 575px) {
		&.package-section.bg-light-grey {
			padding-top: 60px;
		}
	}

	.package-inner-list .row {
		margin: 0 -15px;
	}
	.package-inner-list .row [class*="col-"] {
		padding-left: 15px;
		padding-right: 15px;
	}
	.package-inner-list .package-wrap {
		background-color: #ffffff;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-bottom: 40px;
	}
	.package-inner-list .package-wrap .feature-image,
	.package-inner-list .package-wrap .package-content {
		width: 50%;
	}
	.package-inner-list .package-wrap .package-price {
		right: auto;
		left: 0;
	}
	.package-inner-list .package-wrap .package-meta {
		margin: 0;
	}
	.package-inner-list .package-wrap .package-meta ul li [class*="fa-"] {
		font-size: 10px;
		margin-right: 2px;
	}
	.package-inner-list .package-wrap .package-content {
		padding-top: 30px;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	.package-inner-list .package-wrap .package-content .btn-wrap {
		margin-top: auto;
	}
	@media screen and (max-width: 575px) {
		.package-inner-list .package-wrap .feature-image,
		.package-inner-list .package-wrap .package-content {
			width: 100%;
		}
	}
`;
