import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { themeGet } from "@styled-system/theme-get";

export const Button = styled(Link)`
	/*--------------------------------------------------------------
>>> button
----------------------------------------------------------------*/
	&.outline-primary,
	&.outline-round,
	&.button-primary,
	&.button-round,
	&.button-secondary {
		font-size: ${themeGet("fontSizes.wPx.mdx", "15px")};
		line-height: 1.3;
		padding: 15px 30px;
		font-weight: ${themeGet("fontWeights.mediumX", "15px")};
	}
	@media screen and (max-width: 575px) {
		&.outline-primary,
		&.outline-round,
		&.button-primary,
		&.button-round,
		&.button-secondary {
			font-size: ${themeGet("fontSizes.wPx.md", "14px")};
			padding: 10px 20px;
		}
	}

	input[type="button"],
	input[type="reset"],
	input[type="submit"] {
		border: none;
		background-color: ${themeGet("primary.regular", "#F56960")};
		color: #ffffff;
		cursor: pointer;
		padding: 15px 30px;
		font-weight: ${themeGet("fontWeights.mediumX", "600")};
		-webkit-transition: background-color 0.3s;
		-moz-transition: background-color 0.3s;
		-ms-transition: background-color 0.3s;
		-o-transition: background-color 0.3s;
		transition: background-color 0.3s;
	}
	input[type="button"]:hover,
	input[type="button"]:active,
	input[type="button"]:focus,
	input[type="reset"]:hover,
	input[type="reset"]:active,
	input[type="reset"]:focus,
	input[type="submit"]:hover,
	input[type="submit"]:active,
	input[type="submit"]:focus {
		background-color: ${themeGet("primary.hover", "#2C75BA")};
	}

	&.button-primary,
	&.button-round {
		background-color: ${themeGet("primary.regular", "#F56960")};
	}

	&.button-secondary {
		background-color: ${themeGet("secondary.regular", "#0791BE")};
	}

	&.button-primary,
	&.button-round,
	&.button-secondary {
		border: none;
		color: ${themeGet("light", "#ffffff")};
		display: inline-block;
		position: relative;
		-webkit-transition: background-color 0.3s;
		-moz-transition: background-color 0.3s;
		-ms-transition: background-color 0.3s;
		-o-transition: background-color 0.3s;
		transition: background-color 0.3s;
	}
	&.button-primary:hover,
	&.button-primary:focus,
	&.button-primary:active,
	&.button-round:hover,
	&.button-round:focus,
	&.button-round:active,
	&.button-secondary:hover,
	&.button-secondary:focus,
	&.button-secondary:active {
		background-color: ${themeGet("primary.hover", "#2C75BA")};
		color: ${themeGet("light", "#ffffff")};
	}

	&.outline-primary,
	&.outline-round {
		border: 2px solid #292929;
		color: #292929;
		display: inline-block;
		position: relative;
		-webkit-transition: background-color 0.3s, border-color 0.3s;
		-moz-transition: background-color 0.3s, border-color 0.3s;
		-ms-transition: background-color 0.3s, border-color 0.3s;
		-o-transition: background-color 0.3s, border-color 0.3s;
		transition: background-color 0.3s, border-color 0.3s;
	}
	&.outline-primary:hover,
	&.outline-primary:focus,
	&.outline-primary:active,
	&.outline-round:hover,
	&.outline-round:focus,
	&.outline-round:active {
		background-color: ${themeGet("primary.hover", "#2C75BA")};
		border-color: ${themeGet("primary.hover", "#2C75BA")};
		color: ${themeGet("light", "#ffffff")};
	}

	&.button-round,
	&.outline-round {
		-webkit-border-radius: 30px;
		-moz-border-radius: 30px;
		-ms-border-radius: 30px;
		border-radius: 30px;
	}

	&.button-text {
		color: ${themeGet("secondary.regular", "#0791BE")};
		font-weight: ${themeGet("fontWeights.mediumX", "600")};
		position: relative;
		line-height: 1.3;
		-webkit-transition: all 0.4s;
		-moz-transition: all 0.4s;
		-ms-transition: all 0.4s;
		-o-transition: all 0.4s;
		transition: all 0.4s;
	}
	&.button-text:hover,
	&.button-text:focus,
	&.button-text:active {
		color: ${themeGet("primary.regular", "#F56960")};
	}
`;
