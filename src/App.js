import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/global.style";
import Home from "./pages/Home";
import defaultTheme from "./site-settings/site-theme";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
