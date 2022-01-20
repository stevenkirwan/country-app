import styled from "styled-components";

export const Header = styled.header`
  padding: 4rem 0;
  text-align: center;
  h1 a {
    text-decoration: none;
    color: #000000;
    font-size: 3.2rem;
    line-height: 2.4rem;
    @media only screen and (min-width: 767px) {
      font-size: 4.8rem;
      line-height: 6.4rem;
    }
  }
`;
