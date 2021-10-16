import {createGlobalStyle} from "styled-components";

export const lightTheme = {
	backgroundPrimary: '#EFEFEF',
	backgroundSecondary: '#FFFFFF',
	backgroundTertiary: '#FF000080',
	backgroundButton: '#48AC64',
	backgroundButtonInvert: '#3F3F3F',
	backgroundLowOpacity: '#C4C4C460',
	text: '#727272',
	textInvert: '#000000',
}

export const darkTheme = {
	backgroundPrimary: '#474747',
	backgroundSecondary: '#1D1D1D',
	backgroundTertiary: '#FF0000',
	backgroundButton: '#5ACB79',
	backgroundButtonInvert: '#3F3F3F',
	backgroundLowOpacity: '#C4C4C460',
	text: '#E3E3E3',
	textInvert: '#FFFFFF',
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
			--background-primary: ${({ theme }) => theme.backgroundPrimary};
			--background-secondary: ${({ theme }) => theme.backgroundSecondary};
			--background-terciary: ${({ theme }) => theme.backgroundTertiary};
			--background-button: ${({ theme }) => theme.backgroundButton};
			--background-button-invert: ${({ theme }) => theme.backgroundButtonInvert};
			--background-low-opacity: ${({ theme }) => theme.backgroundLowOpacity};
			--text: ${({ theme }) => theme.text};
			--text-invert: ${({ theme }) => theme.textInvert};
		}
		
		body {
			background-color: var(--background-primary);
		}
	`
