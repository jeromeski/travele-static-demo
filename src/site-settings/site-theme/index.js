const baseColors = {
	transparent: "transparent",
	primary: {
		regular: "#F56960", // primary color
		hover: "#2C75BA"
	},
	secondary: {
		regular: "#0791BE"
	},
	title: "#101F46",
	light: "#ffffff",
	dark: "#000000",
	green: "#4caf50",
	blue: "#167ee6",
	purple: "#4c5caf",
	red: "#da0c4d",
	danger: "#D9534F",
	info: "#5BC0DE",
	success: "#5CB85C",
	warning: "#F0AD4E",
	disable: "#CCC"
};

const defaultTheme = {
	...baseColors,
	breakpoints: ["480px", "576px", "768px", "1200px"],
	fonts: {
		body: "Open Sans, sans-serif",
		title: "Raleway, sans-serif"
	},
	lineHeights: {
		body: 1.6,
		title: 1.2
	},
	boxSizing: "border-box",
	shadows: {
		base: "0 3px 6px rgba(0, 0, 0, 0.16)",
		medium: "0 6px 12px rgba(0, 0, 0, 0.16)",
		big: "0 21px 36px rgba(0, 0, 0, 0.16)",
		header: "0 1px 2px rgba(0, 0, 0, 0.06)"
	},
	containerWidth: "1230px !default",
	fullWidth: "100% !default",
	mainPanelWidth: "75% !default",
	sideBarWidth: "25% !default"
};

export default defaultTheme;
