import styled from "styled-components/macro";
import { LightenDarkenColor } from "lighten-darken-color";
import { themeGet } from "@styled-system/theme-get";

export const MobileMenuContainer = styled.div`
	/*---  mobile slick Nav css ---*/
	/* Slicknav - a Mobile Menu */
	&.mobile-menu-container .slicknav_menu {
		background-color: transparent;
		padding: 0;
	}
	@media screen and (min-width: 992px) {
		&.mobile-menu-container .slicknav_menu {
			display: none;
		}
	}
	&.mobile-menu-container .slicknav_menu .slicknav_btn {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		-ms-flex-pack: center;
		-webkit-flex-direction: row-reverse;
		-moz-flex-direction: row-reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
		margin: 10px 0;
		float: none;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_icon {
		margin-left: 0;
		margin-right: 10px;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_menutxt {
		color: ${themeGet("light", "#ffffff")};
		text-shadow: none;
		display: flex;
		align-items: flex-end;

		font-size: ${themeGet("fontSizes.wPx.md", "16px")};
		font-weight: ${themeGet("fontWeights.bold", "bold")};
	}
	&.mobile-menu-container .slicknav_menu .slicknav_nav li {
		border-top: 1px solid #e6e6e6;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_nav li .slicknav_arrow {
		color: #7a7a7a;
		font-size: ${themeGet("fontSizes.wPx.sm", "13px")};
	}
	&.mobile-menu-container .slicknav_menu .slicknav_row {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 0;
		margin: 0;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_row > a {
		width: -moz-calc(100% - 45px);
		width: -webkit-calc(100% - 45px);
		width: calc(100% - 45px);
	}
	&.mobile-menu-container .slicknav_menu .slicknav_row .slicknav_item {
		border-left: 1px solid #e6e6e6;
		width: 45px;
		padding: 0;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		-ms-flex-pack: center;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_row .slicknav_item .slicknav_arrow {
		position: static;
		padding: 0;
		margin: 0;
	}
	&.mobile-menu-container .slicknav_menu .slicknav_row:hover,
	&.mobile-menu-container .slicknav_menu .slicknav_row:focus,
	&.mobile-menu-container .slicknav_menu .slicknav_row:active {
		background-color: transparent;
		-webkit-border-radius: 0px;
		-moz-border-radius: 0px;
		-ms-border-radius: 0px;
		border-radius: 0px;
	}
	@media screen and (max-width: 991px) {
		&.mobile-menu-container {
			border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		}
	}

	.slicknav_menu .slicknav_btn {
		background-color: transparent;
		padding: 0;
	}
	.slicknav_menu .slicknav_icon-bar {
		background-color: #242424;
	}
	.slicknav_menu .slicknav_nav ul {
		margin: 0;
		padding: 0;
	}
	.slicknav_menu .slicknav_nav li {
		position: relative;
		list-style: none;
	}
	.slicknav_menu .slicknav_nav li a {
		display: inline-block;
		font-size: 15px;
		color: #333333;
		font-weight: 600;
		padding: 10px 15px;
		-webkit-transition: all 0.2s;
		-moz-transition: all 0.2s;
		-ms-transition: all 0.2s;
		-o-transition: all 0.2s;
		transition: all 0.2s;
	}
	.slicknav_menu .slicknav_nav li a:hover,
	.slicknav_menu .slicknav_nav li a:focus,
	.slicknav_menu .slicknav_nav li a:active {
		background-color: transparent;
		color: #2c75ba;
		-webkit-border-radius: 0px;
		-moz-border-radius: 0px;
		-ms-border-radius: 0px;
		border-radius: 0px;
	}
	.slicknav_menu .slicknav_nav {
		background-color: #ffffff;
		-webkit-box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.1);
		-moz-box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.1);
		-ms-box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.1);
		-o-box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.1);
		box-shadow: 0px 22px 21px rgba(0, 0, 0, 0.1);
	}
	.slicknav_menu .slicknav_arrow {
		position: absolute;
		right: 5px;
		height: 100%;
		top: 0;
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: center;
		align-items: center;
		padding: 0 10px;
	}

	.slicknav_btn {
		position: relative;
		display: block;
		vertical-align: middle;
		float: right;
		padding: 0;
		line-height: 1.125em;
		cursor: pointer;
		-webkit-transition: background-color 0.4s;
		-moz-transition: background-color 0.4s;
		-ms-transition: background-color 0.4s;
		-o-transition: background-color 0.4s;
		transition: background-color 0.4s;
	}
	.slicknav_btn .slicknav_icon {
		width: 22px;
		height: 16px;
		display: block;
		position: relative;
		margin-top: 1px;
	}
	.slicknav_btn .slicknav_icon:before {
		display: none;
	}
	.slicknav_btn .slicknav_icon span {
		background-color: #fff;
		box-shadow: none;
		display: none;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 20px;
		height: 2px;
		margin: 0;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.slicknav_btn .slicknav_icon span:first-child {
		display: block;
	}
	.slicknav_btn .slicknav_icon span:first-child:before,
	.slicknav_btn .slicknav_icon span:first-child:after {
		background-color: #fff;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-transition-property: top, transform;
		-moz-transition-property: top, transform;
		-ms-transition-property: top, transform;
		-o-transition-property: top, transform;
		transition-property: top, transform;
		-webkit-transition-delay: 0.2s, 0s;
		-moz-transition-delay: 0.2s, 0s;
		-ms-transition-delay: 0.2s, 0s;
		-o-transition-delay: 0.2s, 0s;
		transition-delay: 0.2s, 0s;
		-webkit-transition-duration: 0.2s, 0.2s;
		-moz-transition-duration: 0.2s, 0.2s;
		-ms-transition-duration: 0.2s, 0.2s;
		-o-transition-duration: 0.2s, 0.2s;
		transition-duration: 0.2s, 0.2s;
	}
	.slicknav_btn .slicknav_icon span:first-child:before {
		top: -6px;
	}
	.slicknav_btn .slicknav_icon span:first-child:after {
		top: 6px;
	}
	.slicknav_btn.slicknav_open span:first-child {
		background-color: transparent !important;
	}
	.slicknav_btn.slicknav_open span:first-child:before,
	.slicknav_btn.slicknav_open span:first-child:after {
		-webkit-transition-delay: 0s, 0.2s;
		-moz-transition-delay: 0s, 0.2s;
		-ms-transition-delay: 0s, 0.2s;
		-o-transition-delay: 0s, 0.2s;
		transition-delay: 0s, 0.2s;
	}
	.slicknav_btn.slicknav_open span:first-child:before {
		top: 0;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.slicknav_btn.slicknav_open span:first-child:after {
		top: 0;
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}
`;
