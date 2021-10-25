import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from './routes'
import {CartProductsProvider, ThemesProvider} from './contexts'

function App() {
	return (
		<ThemesProvider>
			<CartProductsProvider>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</CartProductsProvider>
		</ThemesProvider>
	);
}

export default App;
