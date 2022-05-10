import styled from "styled-components/macro";
import { LightenDarkenColor } from "lighten-darken-color";
import { themeGet } from "@styled-system/theme-get";

export const SiteHeader = styled.header`
	&.site-header {
		position: relative;
	}
	/* .header-primary {
		left: 0;
		right: 0;
		position: absolute;
		width: 100%;
		z-index: 99;
	} */
`;

export const TopHeader = styled.div`
	&.top-header {
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	}

	.header-contact-info {
		color: ${({ theme }) => LightenDarkenColor(theme.colors.light, -10)};
		padding: 11px 0;
	}
	.header-contact-info ul {
		font-size: 0px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.header-contact-info ul li {
		display: inline-block;
		font-size: 13px;
		padding: 0 15px;
	}
	.header-contact-info ul li:last-child {
		padding-right: 0;
	}
	.header-contact-info ul li:first-child {
		padding-left: 0;
	}
	.header-contact-info ul li [class*="fa-"] {
		margin-right: 5px;
	}
	.header-contact-info ul li a {
		color: ${({ theme }) => LightenDarkenColor(theme.colors.light, -10)};
		display: block;
		-webkit-transition: color 0.3s ease-in-out;
		-moz-transition: color 0.3s ease-in-out;
		-ms-transition: color 0.3s ease-in-out;
		-o-transition: color 0.3s ease-in-out;
		transition: color 0.3s ease-in-out;
	}

	.header-contact-info ul li a:hover,
	.header-contact-info ul li a:focus,
	.header-contact-info ul li a:active {
		color: ${themeGet("primary.hover", "#2C75BA")};
	}

	.header-social {
		display: -webkit-inline-box;
		display: -moz-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-align-content: center;
		-moz-align-content: center;
		-ms-align-content: center;
		align-content: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.header-social li {
		margin: 0 8px;
	}
	.header-social a {
		color: ${({ theme }) => LightenDarkenColor(theme.colors.light, -10)};
	}
	.header-social a:hover,
	.header-social a:focus {
		color: ${themeGet("primary.hover", "#2C75BA")};
	}
	@media screen and (max-width: 991px) {
		.header-social {
			padding: 10px 0;
		}
	}

	.header-search-icon {
		display: -webkit-inline-box;
		display: -moz-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-align-content: center;
		-moz-align-content: center;
		-ms-align-content: center;
		align-content: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		border-left: 1px solid rgba(255, 255, 255, 0.25);
		border-right: 1px solid rgba(255, 255, 255, 0.25);
		margin-left: 10px;
	}
	.header-search-icon .search-icon {
		background-color: transparent;
		border: none;
		border-radius: 0;
		color: ${themeGet("light", "#ffffff")};
		height: 100%;
		padding: 0 15px;
		width: 100%;
	}
	.header-search-icon .search-icon:hover,
	.header-search-icon .search-icon:focus {
		outline: none;
		color: ${themeGet("primary.hover", "#2C75BA")};
	}
`;

export const BottomHeader = styled.div`
	/*--- header Logo css start ---*/
	.site-identity .site-title {
		margin: 0;
		line-height: 1.1;
		font-size: 28px;
	}
	.site-identity .site-description {
		font-size: 13px;
		margin-bottom: 0;
	}
	.site-identity img {
		max-width: 170px;
		-webkit-transition: opacity 0.4s linear;
		-moz-transition: opacity 0.4s linear;
		-ms-transition: opacity 0.4s linear;
		-o-transition: opacity 0.4s linear;
		transition: opacity 0.4s linear;
	}
	.site-identity a {
		display: block;
	}
	.site-identity a:hover img,
	.site-identity a:focus img,
	.site-identity a:active img {
		opacity: 0.5;
	}
	@media screen and (max-width: 575px) {
		.site-identity img {
			max-width: 120px;
		}
	}

	@media screen and (max-width: 991px) {
		&.bottom-header {
			position: relative;
		}
		&.bottom-header [class*="col-"] {
			position: static;
		}
	}

	&.bottom-header {
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
	}

	/*--------------------------------------------------------------
>>> Main Header Menu
----------------------------------------------------------------*/
	@media screen and (max-width: 991px) {
		&.bottom-header {
			border-bottom: 1px solid rgba(255, 255, 255, 0.25);
			padding: 10px 0;
		}
	}

	.navigation-container {
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
	}
	@media screen and (max-width: 991px) {
		.navigation-container {
			padding-right: 35px;
		}
	}

	.main-navigation .navigation > ul > li {
		display: inline-block;
		padding: 0 16px;
	}
	.main-navigation ul {
		font-size: 0;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.main-navigation ul > li.menu-item-has-children > a:after {
		content: "";
	}
	.main-navigation ul > li:last-child {
		border-bottom: none;
	}
	.main-navigation ul > li:last-child:before {
		display: none;
	}
	.main-navigation ul > li > a {
		color: #ffffff;
		display: inline-block;
		font-size: ${themeGet("fontSizes.wPx.mdx", "15px")};
		padding: 30px 0;
		font-weight: ${themeGet("fontWeights.mediumX", "600")};
		line-height: 1.3;
		position: relative;
		text-transform: uppercase;
	}
	.main-navigation ul > li:hover > ul,
	.main-navigation ul > li:focus > ul,
	.main-navigation ul > li:active > ul {
		display: block;
	}
	.main-navigation ul > li:hover > a,
	.main-navigation ul > li:focus > a,
	.main-navigation ul > li:active > a {
		color: ${themeGet("primary.regular", "#F56960")};
	}
	.main-navigation ul > li:hover > a:after,
	.main-navigation ul > li:focus > a:after,
	.main-navigation ul > li:active > a:after {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.main-navigation ul ul {
		background: ${themeGet("light", "#ffffff")};
		border-top: 4px solid ${themeGet("primary.regular", "#F56960")};
		left: 0;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 100%;
		width: 250px;
		z-index: 99;
		display: none;
		text-align: left;
		-webkit-animation: slide-up 0.3s ease-out;
		-moz-animation: slide-up 0.3s ease-out;
		-ms-animation: slide-up 0.3s ease-out;
		-o-animation: slide-up 0.3s ease-out;
		animation: slide-up 0.3s ease-out;
	}
	.main-navigation ul ul li {
		border-bottom: 1px solid #ddd;
		position: relative;
		display: block;
	}
	.main-navigation ul ul li a {
		color: #333;
		display: block;
		padding: 13px 20px;
		text-transform: capitalize;
		font-weight: 600;
		-webkit-transition: all 0.4s;
		-moz-transition: all 0.4s;
		-ms-transition: all 0.4s;
		-o-transition: all 0.4s;
		transition: all 0.4s;
	}
	.main-navigation ul ul li a:hover,
	.main-navigation ul ul li a:focus,
	.main-navigation ul ul li a:active {
		padding-left: 30px;
		color: ${themeGet("primary.regular", "#F56960")};
	}
	.main-navigation ul ul li > ul {
		left: 100%;
		top: 0;
	}
	.main-navigation ul ul li.menu-item-has-children > a:after {
		content: "";
	}
	.main-navigation ul ul li:hover > ul,
	.main-navigation ul ul li:focus > ul,
	.main-navigation ul ul li:active > ul {
		display: block;
		top: -3px;
	}
	.main-navigation ul ul li:hover a:after,
	.main-navigation ul ul li:focus a:after,
	.main-navigation ul ul li:active a:after {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);
		transform: rotate(180deg);
	}
	.main-navigation ul li {
		position: relative;
	}
	.main-navigation ul li:last-child ul,
	.main-navigation ul li:nth-last-child(2) ul {
		left: auto;
		right: 0;
	}
	.main-navigation ul li:last-child ul ul,
	.main-navigation ul li:nth-last-child(2) ul ul {
		right: 100%;
	}
	.main-navigation ul li.menu-item-has-children > a {
		position: relative;
	}
	.main-navigation ul li.menu-item-has-children > a:after {
		display: inline-block;
		float: right;
		font-size: 14px;
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		font-weight: 900;
		margin-left: 8px;
		-webkit-transition: transform 0.4s;
		-moz-transition: transform 0.4s;
		-ms-transition: transform 0.4s;
		-o-transition: transform 0.4s;
		transition: transform 0.4s;
	}
	.main-navigation ul li.menu-item-has-children li:hover > a,
	.main-navigation ul li.menu-item-has-children li:focus > a {
		background-color: ${themeGet("primary.hover", "#2C75BA")};

		color: ${themeGet("light", "#ffffff")};
	}
	.main-navigation ul li.current-menu-item > a,
	.main-navigation ul li.current-menu-parent > a {
		color: ${themeGet("primary.regular", "#F56960")};
	}

	@-webkit-keyframes slide-up {
		from {
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-ms-transform: translateY(10px);
			-o-transform: translateY(10px);
			transform: translateY(10px);
		}
		to {
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
			transform: translateY(0);
		}
	}
	@-moz-keyframes slide-up {
		from {
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-ms-transform: translateY(10px);
			-o-transform: translateY(10px);
			transform: translateY(10px);
		}
		to {
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
			transform: translateY(0);
		}
	}
	@-o-keyframes slide-up {
		from {
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-ms-transform: translateY(10px);
			-o-transform: translateY(10px);
			transform: translateY(10px);
		}
		to {
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
			transform: translateY(0);
		}
	}
	@keyframes slide-up {
		from {
			-webkit-transform: translateY(10px);
			-moz-transform: translateY(10px);
			-ms-transform: translateY(10px);
			-o-transform: translateY(10px);
			transform: translateY(10px);
		}
		to {
			-webkit-transform: translateY(0);
			-moz-transform: translateY(0);
			-ms-transform: translateY(0);
			-o-transform: translateY(0);
			transform: translateY(0);
		}
	}
	.header-btn {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		white-space: nowrap;
	}
	.header-btn a {
		padding: 10px 24px;
	}
	@media screen and (max-width: 575px) {
		.header-btn {
			-webkit-justify-content: flex-end;
			-moz-justify-content: flex-end;
			-ms-justify-content: flex-end;
			justify-content: flex-end;
			-ms-flex-pack: flex-end;
		}
		.header-btn a {
			padding: 8px 20px;
			font-size: ${themeGet("fontSizes.wPx.md", "14px")};
		}
	}
`;
