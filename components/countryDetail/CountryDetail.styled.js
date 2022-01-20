import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 767px) {
    width: 65rem;
  }
`;

export const Content = styled.section`
  background: #ffffff;
  border-radius: 0.8rem;
  width: 100%;
  margin: 0 auto;
  padding: 2.4rem 0;
  @media only screen and (min-width: 767px) {
    width: 65rem;
  }
`;

export const Button = styled.button`
  font-size: 1.6rem;
  padding: 2.1rem 1.7rem;
  min-width: 17rem;
  min-height: 6rem;
  cursor: pointer;
  background-color: #3498db;
  color: #ffffff;
  margin-bottom: 1.6rem;
`;

export const CountryDetail = styled.div`
  border: 1px solid #f7f7f7;
  width:100%;
  padding: 2.4rem;
  margin: 2.4rem auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 767px) {
    width: 60rem;
  }
  h3 {
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BorderWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BorderItem = styled.li`
  background: #ffffff;
  padding-left: 2.4rem;
  display: flex;
  flex: 0 0 25%;
  margin: 0.8rem;
  flex-direction: column;
  border: 1px solid #f7f7f7;
  justify-content: center;
  padding-left: 0;
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

export const BorderTitle = styled.h3`
  text-align: center;
  margin-bottom: 1.6rem;
  font-size: 1.8rem;
`;
