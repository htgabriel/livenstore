import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from './routes'
import ThemesProvider from './contexts/Themes'

function App() {
	return (
		<ThemesProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ThemesProvider>
	);
}

export default App;
