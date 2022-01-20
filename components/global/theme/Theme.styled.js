import { createGlobalStyle, css } from "styled-components";
import {theme} from "./Theme.config";
const bodyStyles = css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		font-variant-numeric: lining-nums;
	}
	html {
		-webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
	}
	html,
	body {
		font-family: ${theme.font.primary};
		font-weight: normal;
		padding: 0;
		margin: 0;
		max-width: 100%;
		width: 100%;
		word-wrap: break-word;
		-webkit-font-smoothing: antialiased;
		font-size: 10px;
	}
	body {
		margin: 0 auto;
		background-color: #f3f3f3;
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 10px;
		font-family: inherit;
		vertical-align: baseline;
		font-size: 1.6rem;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	img {
		max-width: 100%;
		color: transparent;
	}

	p {
		font-size: 1.4rem;
		line-height: 2.4rem;

		@media only screen and (min-width: 767px) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
	}
`;

const GlobalStyle = createGlobalStyle`
   	${bodyStyles}
	   
`;
export default GlobalStyle;
