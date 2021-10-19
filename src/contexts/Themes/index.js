import React, {createContext, useState} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyles, lightTheme, darkTheme} from './Themes'

const ThemeContext = createContext({})

function ThemesProvider({children}){
	const [theme, setTheme] = useState('light')
	
	const toggleTheme = () =>
		theme === 'light'
			? setTheme('dark')
			: setTheme('light')
	
	return (
		<ThemeProvider
			theme={theme === 'light' ? lightTheme : darkTheme}
		>
			<ThemeContext.Provider
				value={{toggleTheme, theme}}
			>
				<GlobalStyles />
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	)
}

export default ThemesProvider