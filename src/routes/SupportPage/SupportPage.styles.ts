import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  font-family: Outfit, sans-serif;
  width: 80%;
  max-width: 1000px;
  height: 350px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  box-shadow: 8px 8px 20px -7px rgba(66, 68, 90, 1);
  display: flex;
  position: relative;
  padding: 50px;
`;

export const WrapperLeft = styled.div`
  align-self: flex-start;
  height: 100%;
  width: 50%;
  text-align: left;
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
  & p {
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
`;

export const WrapperRight = styled.div`
  height: 100%;
  width: 30%;
  margin-left: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 40px;
  width: 120px;
  position: absolute;
  right: 100px;
  bottom: 50px;
`;
