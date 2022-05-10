import styled from "styled-components/macro";
import { LightenDarkenColor } from "lighten-darken-color";

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
		color: ${({ theme }) => theme.colors.primary.hover};
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
		color: #fafafa;
	}
	.header-social a:hover,
	.header-social a:focus {
		color: #2c75ba;
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
		color: #ffffff;
		height: 100%;
		padding: 0 15px;
		width: 100%;
	}
	.header-search-icon .search-icon:hover,
	.header-search-icon .search-icon:focus {
		outline: none;
		color: #2c75ba;
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
`;
