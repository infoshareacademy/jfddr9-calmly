import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("src/assets/feelingbetter esukt.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Outfit", sans-serif;

  @media (max-width: 1000px) {
    background: linear-gradient(
      141.59deg,
      #f6c59c 11.57%,
      #e3b4ab 53.27%,
      #b3b4ef 123.37%
    );
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-left: 110px;
  color: #797bec;

  @media (max-width: 1000px) {
    margin: 0 auto;
    width: auto;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin-top: 240px;
`;

export const Text = styled.div`
  position: absolute;
  width: 680px;
  height: 232px;
  left: 144px;
  top: 108px;
  font-family: "Outfit", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 92px;
  line-height: 122px;
  color: #ffffff;

  @media only screen and (min-width: 950px) and (max-width: 1000px) {
    font-size: 105px;
    left: 0;
    width: auto;
  }
  @media (max-width: 950px) {
    left: 0;
    width: auto;
  }
  @media (max-width: 620px) {
    font-size: 70px;
    line-height: 72px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
  border: 3px solid #ffffff;
  border-radius: 50px;
  color: white;
  text-align: center;
  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
    background-color: white;
    color: #e3b4ab;
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(99%);
  }
`;
