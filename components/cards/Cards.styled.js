import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  background: #ffffff;
  padding-left: 2.4rem;
  display: flex;
  margin: 0.8rem;
  flex-direction: column;
  height: 20rem;
  border-radius: 0.8rem;
  justify-content: center;
  padding-left: 0;
  width:100%;
  @media only screen and (min-width: 992px) {
    flex: 0 0 23%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    padding: 2.4rem;
    color: #000000;
    transition: all ease-in-out 0.4s;
    font-weight: bold;
    &:hover {
      box-shadow: rgba(2, 36, 41, 0.15) 0px 4px 8px 0px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Flag = styled.img`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  width: 6rem;
  height: 4rem;
  justify-content: center;
  flex-basis: 6rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const Country = styled.p`
  font-size: 2rem;
`;
