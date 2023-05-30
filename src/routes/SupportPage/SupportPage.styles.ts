import styled from "styled-components";

export const Background = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  font-family: Outfit, sans-serif;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  box-shadow: 8px 8px 20px -7px rgba(66, 68, 90, 1);
  padding: 25px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 200px;
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
    background: none;
    box-shadow: none;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
  }
  & h3 {
    font-weight: 400;
    font-size: 22px;
  }
  & a {
    font-size: 44px;
    font-weight: 700;
    line-height: 55px;
    margin: 0;
  }
  & span {
    color: #797bec;
    font-size: 44px;
    font-weight: 700;
  }
  @media only screen and (min-width: 1251px) and (max-width: 1580px) {
    a {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
    span {
      font-size: 36px;
    }
    h2 {
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 1250px) {
    margin: 0 150px;
    a {
      font-size: 26px;
      font-weight: 500;
      line-height: 30px;
    }
    h3 {
      font-size: 20px;
    }
    span {
      font-size: 28px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;

export const WrapperRight = styled.div`
  display: flex;
`;

export const Img = styled.img`
  @media only screen and (max-width: 515px) {
    width: 300px;
  }
`;
