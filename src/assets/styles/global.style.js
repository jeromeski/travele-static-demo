import { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import { css } from "@styled-system/css";
import { normalize } from "./normalize";
import { defaults, otherDefaults } from "./defaults";

export const GlobalStyle = createGlobalStyle(({ theme }) => {
	return css({
		...normalize,
		body: {
			fontSize: "14px",
			color: "#737373",
			backgroundColor: "#ffffff",
			fontFamily: '"Poppins", sans-serif',
			fontWeight: "normal",
			fontStyle: "normal",
			lineHeight: 1.6,
			WebkitFontSmoothing: "antialiased",
			wordWrap: "break-word",
			"@media screen and (max-width: 575px)": { fontSize: "14px" }
		},
		p: { lineHeight: get(theme, "lineHeights.body"), margin: "0 0 20px", wordWrap: "break-word" },
		"dfn, cite, em, i": { fontStyle: "italic" },
		"blockquote, pre": {
			backgroundColor: "#fafafa",
			borderWidth: "0 0 0 3px",
			borderColor: "#d9d9d9",
			borderStyle: "solid",
			WebkitBoxShadow: "none",
			MozBoxShadow: "none",
			msBoxShadow: "none",
			OBoxShadow: "none",
			boxShadow: "none",
			color: "#1a1a1a",
			fontFamily: '"Poppins", sans-serif',
			fontStyle: "italic",
			margin: "0 0 15px 0",
			padding: "25px 22px",
			fontSize: get(theme, "fontSizes.lg")
		},
		blockquote: {
			backgroundColor: "transparent",
			borderLeft: "none",
			color: "#292929",
			margin: "40px 0",
			textAlign: "center",
			position: "relative",
			padding: "30px"
		},
		"blockquote:before": {
			backgroundColor: get(theme, "colors.light"),
			color: "#333333",
			content: '""',
			fontFamily: '"Font Awesome 5 Free"',
			fontWeight: get(theme, "fontWeights.bolder"),
			fontSize: "20px",
			cssFloat: "left",
			marginRight: "20px",
			lineHeight: 1,
			fontStyle: "normal",
			position: "absolute",
			left: "50%",
			WebkitTransform: "translate(-50%, 0)",
			MozTransform: "translate(-50%, 0)",
			msTransform: "translate(-50%, 0)",
			OTransform: "translate(-50%, 0)",
			transform: "translate(-50%, 0)",
			top: "-10px",
			padding: "0 10px",
			zIndex: 9
		},
		"blockquote:after": {
			borderBottom: "2px solid #ddd",
			borderTop: "2px solid #ddd",
			content: ['""', '""'],
			bottom: "0",
			display: "block",
			left: "50%",
			WebkitTransform: "translate(-50%, 0)",
			MozTransform: "translate(-50%, 0)",
			msTransform: "translate(-50%, 0)",
			OTransform: "translate(-50%, 0)",
			transform: "translate(-50%, 0)",
			position: "absolute",
			top: "0",
			width: "200px"
		},
		"blockquote p": {
			fontFamily: get(theme, "fonts.title"),
			fontSize: "28px",
			lineHeight: 1.4
		},
		"blockquote cite": {
			color: "#8d8d8d",
			display: "block",
			fontStyle: "normal",
			fontSize: get(theme, "fontSize.sm")
		},
		"abbr, acronym": { borderBottom: "1px dotted #4d4d4d", cursor: "help" },
		"mark, ins": {
			textDecoration: "none",
			paddingLeft: "5px",
			paddingRight: "5px"
		},
		big: { fontSize: "125%" },
		"b, strong": { fontWeight: get(theme, "fontWeights.bold") },
		iframe: { display: "block", width: "100%" },
		img: { height: "auto", maxWidth: "100%", verticalAlign: "top" },
		"h1, h2, h3, h4, h5, h6": {
			color: "#292929",
			fontFamily: '"Montserrat", sans-serif',
			margin: "0 0 15px",
			lineHeight: 1.3
		},
		"h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": { color: "inherit" },
		h1: { fontSize: "48px" },
		h2: { fontSize: "36px" },
		h3: { fontSize: "20px" },
		h4: { fontSize: "18px" },
		h5: { fontSize: "16px" },
		h6: { fontSize: "14px" },
		"@media screen and (max-width: 767px)": {
			h1: { fontSize: "30px" },
			h2: { fontSize: "24px" },
			h3: { fontSize: "18px" },
			h4: { fontSize: "14px" },
			h5: { fontSize: "14px" },
			h6: { fontSize: "14px" }
		},
		"ul,\nol": { margin: "0 0 1.5em 0.875em" },
		ul: { listStyle: "disc" },
		ol: { listStyle: "decimal" },
		"li > ul,\nli > ol": { marginBottom: "0", marginLeft: "1.5em" },
		dt: { fontWeight: "bold" },
		dd: { margin: "0 1.5em 1.5em" },
		// clearfix
		".clearfix:before,\n.entry-content:before,\n.comment-content:before,\n.site-header:before,\n.clearfix:after,\n.entry-content:after,\n.comment-content:after,\n.site-header:after":
			{ content: '""', display: "block", clear: "both" },
		...otherDefaults,
		customs: {
			// transitions: {
			//   base: '.3s ease-out',
			// },
			transition: "0.3s ease"
		}
	});
});
