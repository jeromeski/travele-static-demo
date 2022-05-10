export const otherDefaults = {
	".white-bg": { backgroundColor: "#ffffff" },
	".bg-light-grey": { backgroundColor: "#f8f8f8" },
	".primary-bg": { backgroundColor: "#F56960" },
	".secondary-bg": { backgroundColor: "#0791BE" },
	".pl-20": { paddingLeft: "20px" },
	".pr-40": { paddingRight: "40px" },
	".social-links ul": { margin: "0", padding: "0", fontSize: "0" },
	".social-links li": {
		display: "inline-block",
		listStyle: "none",
		margin: "0 10px"
	},
	".social-links a": {
		fontSize: "16px",
		color: "#404040",
		WebkitTransition: "color 0.4s",
		MozTransition: "color 0.4s",
		msTransition: "color 0.4s",
		OTransition: "color 0.4s",
		transition: "color 0.4s"
	},
	".social-links a:hover, .social-links a:focus, .social-links a:active": {
		color: "#2C75BA"
	},
	".social-icon-wrap": {
		display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
		WebkitFlexWrap: "wrap",
		MozFlexWrap: "wrap",
		msFlexWrap: "wrap",
		flexWrap: "wrap",
		margin: "-5px"
	},
	".social-icon-wrap .social-icon": {
		padding: "5px",
		WebkitFlexGrow: "1",
		MozFlexGrow: "1",
		msFlexGrow: "1",
		flexGrow: 1
	},
	".social-icon-wrap .social-icon a": {
		backgroundColor: "#F56960",
		color: "#ffffff",
		display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
		WebkitAlignItems: "center",
		MozAlignItems: "center",
		msAlignItems: "center",
		msFlexAlign: "center",
		alignItems: "center",
		WebkitTransition: "all 0.3s",
		MozTransition: "all 0.3s",
		msTransition: "all 0.3s",
		OTransition: "all 0.3s",
		transition: "all 0.3s"
	},
	".social-icon-wrap .social-icon a:hover": {
		WebkitFilter: "saturate(1.5) brightness(1.2)",
		MozFilter: "saturate(1.5) brightness(1.2)",
		msFilter: "saturate(1.5) brightness(1.2)",
		OFilter: "saturate(1.5) brightness(1.2)",
		filter: "saturate(1.5) brightness(1.2)"
	},
	".social-icon-wrap .social-icon [class*=fa-]": {
		width: "40px",
		textAlign: "center"
	},
	".social-icon-wrap .social-icon span": {
		backgroundImage: [
			"-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.12)), to(transparent))",
			"-webkit-linear-gradient(left, rgba(0, 0, 0, 0.12), transparent)",
			"-o-linear-gradient(left, rgba(0, 0, 0, 0.12), transparent)",
			"linear-gradient(90deg, rgba(0, 0, 0, 0.12), transparent)"
		],
		padding: "10px 15px"
	},
	".social-icon-wrap .social-facebook a": { backgroundColor: "#3b5998" },
	".social-icon-wrap .social-pinterest a": { backgroundColor: "#bd081c" },
	".social-icon-wrap .social-whatsapp a": { backgroundColor: "#25d366" },
	".social-icon-wrap .social-linkedin a": { backgroundColor: "#0077b5" },
	".social-icon-wrap .social-twitter a": { backgroundColor: "#1da1f2" },
	".social-icon-wrap .social-google a": { backgroundColor: "#dd4b39" },
	".to-top-icon": {
		backgroundColor: "rgba(245, 105, 96, 0.7)",
		color: "#ffffff",
		fontSize: "20px",
		display: "none",
		lineHeight: "45px",
		textAlign: "center",
		WebkitBorderRadius: "100%",
		MozBorderRadius: "100%",
		msBorderRadius: "100%",
		borderRadius: "100%",
		width: "45px",
		height: "45px",
		position: "fixed",
		right: "15px",
		bottom: "15px",
		zIndex: 99,
		WebkitTransition: "background-color 0.3s, color 0.3s",
		MozTransition: "background-color 0.3s, color 0.3s",
		msTransition: "background-color 0.3s, color 0.3s",
		OTransition: "background-color 0.3s, color 0.3s",
		transition: "background-color 0.3s, color 0.3s"
	},
	".to-top-icon:hover": { backgroundColor: "#2C75BA", color: "#ffffff" },
	"@media screen and (max-width: 575px)": {
		".to-top-icon": {
			width: "25px",
			height: "25px",
			lineHeight: "25px",
			fontSize: "13px",
			right: "10px",
			bottom: "10px"
		}
	}
};
