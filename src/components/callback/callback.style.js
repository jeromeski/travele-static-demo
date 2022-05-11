import styled from "styled-components/macro";

export const CallbackSection = styled.section`
	/*--------------------------------------------------------------
>>> Home travel callback section  
----------------------------------------------------------------*/
	&.callback-section {
		position: relative;
		margin-bottom: 140px;
	}
	&.callback-section:before {
		background-color: #0791be;
		content: "";
		width: 70%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
	}
	&.callback-section .callback-img {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		min-height: 540px;
	}
	@media screen and (max-width: 991px) {
		&.callback-section:before {
			width: 100%;
		}
		&.callback-section .callback-img {
			min-height: 300px;
			background-position: top center;
			margin-left: calc(-100vw / 2 + 100% / 2);
			margin-right: calc(-100vw / 2 + 100% / 2);
		}
	}
	@media screen and (max-width: 575px) {
		&.callback-section {
			margin-bottom: 120px;
		}
	}

	.callback-inner {
		padding: 100px 0px 0px 65px;
	}
	@media screen and (max-width: 991px) {
		.callback-inner {
			padding: 80px 0px 0 0px;
		}
	}
	@media screen and (max-width: 575px) {
		.callback-inner {
			padding: 30px 0px 0 0px;
		}
	}

	.callback-counter-wrap {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-bottom: 50px;
	}
	&.callback-section .callback-counter-wrap .counter-item {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 25px 25px 18px 25px;
		width: 50%;
	}
	.callback-counter-wrap .counter-icon {
		width: 52px;
	}
	.callback-counter-wrap .counter-content {
		width: -moz-calc(100% - 52px);
		width: -webkit-calc(100% - 52px);
		width: calc(100% - 52px);
		text-align: center;
	}
	.callback-counter-wrap .counter-no {
		color: #ffffff;
		display: block;
		font-size: 32px;
		line-height: 1.1;
		font-weight: 900;
	}
	.callback-counter-wrap .counter-text {
		color: #ffffff;
		display: block;
	}
	@media screen and (min-width: 768px) {
		.callback-counter-wrap .counter-item {
			border-right: 1px solid rgba(255, 255, 255, 0.4);
			border-bottom: 1px solid rgba(255, 255, 255, 0.4);
		}
		.callback-counter-wrap .counter-item:nth-child(2n + 2) {
			border-right: none;
		}
		.callback-counter-wrap .counter-item:last-child,
		.callback-counter-wrap .counter-item:nth-last-child(2) {
			border-bottom: none;
		}
	}
	@media screen and (max-width: 767px) {
		.callback-counter-wrap .counter-item {
			width: 100%;
		}
		.callback-counter-wrap .counter-icon {
			width: 40px;
		}
		.callback-counter-wrap .counter-item {
			border: 1px solid rgba(255, 255, 255, 0.4);
			margin-bottom: 10px;
		}
		.callback-counter-wrap .counter-content {
			width: -moz-calc(100% - 40px);
			width: -webkit-calc(100% - 40px);
			width: calc(100% - 40px);
			padding-left: 20px;
			text-align: right;
		}
	}
	@media screen and (max-width: 575px) {
		.callback-counter-wrap {
			margin-bottom: 30px;
		}
	}

	.callback-img {
		position: relative;
	}

	.support-area {
		background-color: #ffffff;
		box-shadow: 0px 15px 55px -15px rgba(0, 0, 0, 0.1);
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		margin-bottom: -50px;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 35px;
	}
	.support-area .support-icon {
		width: 52px;
		margin-right: 26px;
	}
	.support-area h3 {
		color: #f56960;
		font-family: "Open Sans", sans-serif;
		font-size: 30px;
		font-weight: 900;
		line-height: 1.1;
		margin-bottom: 0;
	}
	.support-area h4 {
		color: #383838;
		font-size: 18px;
		font-weight: 700;
		line-height: 1.3;
	}
	@media screen and (min-width: 992px) {
		.support-area {
			display: -webkit-inline-box;
			display: -moz-inline-box;
			display: -webkit-inline-flex;
			display: -ms-inline-flexbox;
			display: inline-flex;
		}
	}
	@media screen and (max-width: 575px) {
		.support-area {
			padding: 20px;
		}
		.support-area h3 {
			font-size: 20px;
		}
		.support-area h4 {
			font-size: 15px;
		}
	}

	.video-button {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.video-button a {
		display: block;
		position: relative;
		cursor: pointer;
	}
	.video-button a i {
		background-color: #ffffff;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		-ms-border-radius: 100%;
		border-radius: 100%;
		color: #0791be;
		display: block;
		font-size: 24px;
		line-height: 104px;
		width: 104px;
		height: 104px;
		text-align: center;
	}
	.video-button a:after {
		background-color: #ffffff;
		position: absolute;
		display: block;
		content: "";
		height: 70px;
		width: 70px;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		-ms-border-radius: 100%;
		border-radius: 100%;
		z-index: -1;
		top: 16px;
		left: 16px;
		-webkit-animation: videoPulse 1.6s ease-out infinite;
		animation: videoPulse 1.6s ease-out infinite;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
	@media screen and (max-width: 575px) {
		.video-button a i {
			font-size: 18px;
			height: 80px;
			width: 80px;
			line-height: 80px;
		}
		.video-button a:after {
			height: 50px;
			width: 50px;
		}
	}

	.bg-color-callback {
		background-color: #0791be;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.bg-color-callback .callback-content h2 {
		color: #ffffff;
		font-size: 30px;
		font-weight: 700;
		line-height: 1.1;
	}
	.bg-color-callback .callback-content p {
		color: #ffffff;
	}
	.bg-color-callback .callback-content p:last-child {
		margin-bottom: 0;
	}
	@media screen and (min-width: 768px) {
		.bg-color-callback .callback-content {
			padding-right: 50px;
		}
	}
	.bg-color-callback .button-wrap {
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		.bg-color-callback .button-wrap {
			text-align: right;
		}
	}
	@media screen and (max-width: 767px) {
		.bg-color-callback {
			text-align: center;
		}
		.bg-color-callback .callback-content {
			margin-bottom: 30px;
		}
		.bg-color-callback .callback-content h2 {
			font-size: 20px;
		}
	}

	.bg-img-callback {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		position: relative;
		padding: 70px 0;
	}
	.bg-img-callback:before {
		content: "";
		background-color: #151515;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0.75;
	}
	.bg-img-callback .callback-content {
		color: #ffffff;
	}
	.bg-img-callback .callback-content h2 {
		color: #ffffff;
	}
	.bg-img-callback .button-wrap {
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		.bg-img-callback .button-wrap {
			text-align: right;
		}
	}
	@media screen and (max-width: 767px) {
		.bg-img-callback {
			text-align: center;
		}
	}

	@-webkit-keyframes videoPulse {
		0%,
		35% {
			-webkit-transform: scale(0);
			transform: scale(0);
			opacity: 1;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		}
		50% {
			-webkit-transform: scale(1.5);
			transform: scale(1.5);
			opacity: 0.8;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
		}
		100% {
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
			-webkit-transform: scale(2);
			transform: scale(2);
		}
	}
	@keyframes videoPulse {
		0%,
		35% {
			-webkit-transform: scale(0);
			transform: scale(0);
			opacity: 1;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		}
		50% {
			-webkit-transform: scale(1.5);
			transform: scale(1.5);
			opacity: 0.8;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
		}
		100% {
			opacity: 0;
			-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
			-webkit-transform: scale(2);
			transform: scale(2);
		}
	}
`;
