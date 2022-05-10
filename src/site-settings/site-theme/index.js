const baseColors = {
	colors: {
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
	}
};

const defaultTheme = {
	...baseColors,
	breakpoints: ["480px", "576px", "768px", "1200px"],
	fonts: {
		body: "Open Sans, sans-serif",
		title: "Raleway, sans-serif"
	},
	fontSizes: {
		xs: 12,
		sm: 13,
		base: 14,
		md: 16,
		lg: 18,
		xl: 24,
		"2xl": 30,
		"3xl": 36,
		"4xl": 42,
		"5xl": 48
	},
	fontWeights: {
		body: 400,
		heading: 700,
		thin: 100,
		light: 300,
		regular: 400,
		normal: 400,
		medium: 500,
		bold: 700,
		bolder: 900
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
