import {createGlobalStyle} from "styled-components";

export const lightTheme = {
	background: '#ffffff'
}

export const darkTheme = {
	background: '#2d2d2d'
}

export const GlobalStyles = createGlobalStyle
	`
		#root {
			height: 100vh !important;
		}
		
		*, *::after, *::before {
			box-sizing: border-box;
			transition: all 0.25s linear;
		}
		
		:root {
			--background: ${({ theme }) => theme.background}
		}
		
		body {
			background-color: var(--background);
		}
	`
