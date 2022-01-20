import { getYear } from "../../utils/getYear";
import * as Styled from "./Footer.styled";

const Header = () => {
  return (
    <Styled.Footer>
      <p>Countries App {getYear()}</p>
    </Styled.Footer>
  );
};

export default Header;
