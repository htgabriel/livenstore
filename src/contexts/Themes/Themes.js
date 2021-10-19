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
      	@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
      
		#root {
			height: 100vh !important;
		}
		
		*, *::after, *::before {
			box-sizing: border-box;
			transition: all 0.25s linear;
		}
		
		:root {
          --background-primary: ${({theme}) => theme.backgroundPrimary};
          --background-secondary: ${({theme}) => theme.backgroundSecondary};
          --background-terciary: ${({theme}) => theme.backgroundTertiary};
          --background-button: ${({theme}) => theme.backgroundButton};
          --background-button-invert: ${({theme}) => theme.backgroundButtonInvert};
          --background-low-opacity: ${({theme}) => theme.backgroundLowOpacity};
          --text: ${({theme}) => theme.text};
          --text-invert: ${({theme}) => theme.textInvert};
        }

        body {
          line-height: 1;
          background-color: var(--background-primary);
          color: var(--text);
        }

        //RESET FOR CSS
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font: inherit;
			vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
			display: block;
        }

        *, ::after, ::before {
          box-sizing: border-box;
        }
       
        ol, ul {
			list-style: none;
        }
        blockquote, q {
			quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
			content: '';
			content: none;
        }
        table {
			border-collapse: collapse;
			border-spacing: 0;
        }
	`
