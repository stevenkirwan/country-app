import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.config";
import GlobalStyle from "./Theme.styled";

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.node
};
export default Theme;
