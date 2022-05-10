import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/global.style";
import SiteLoader from "./components/site-loader/SiteLoader";

import defaultTheme from "./site-settings/site-theme";
import "./assets/vendor/bootstrap/bootstrap.css";
import "./assets/vendor/fontawesome/css/all.css";
import "./assets/styles/global.style.css";

import Footer from "layout/footer/footer.style";
import Header from "layout/header/Header";
const Home = lazy(() => import("./pages/Home"));

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Suspense fallback={<SiteLoader />}>
					<Routes>
						<Route exact path="/" element={<Home />} />
					</Routes>
				</Suspense>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
