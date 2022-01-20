import Link from "next/link";
import * as Styled from "./Header.styled";

const Header = () => {
  return (
    <Styled.Header>
      <h1><Link href="/">Countries App</Link></h1>
    </Styled.Header>
  );
};

export default Header;
