import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("src/assets/Resultbackground.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: -50px;
`;

export const Img = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 150px;
`;

export const WrapperContent = styled.div`
  position: absolute;
  bottom: 50px;
  left: 80px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 400px;
`;

export const Text = styled.div`
  font-family: "Outfit", sans-serif;
  color: #797bec;
  font-size: 60px;
  font-weight: 600;
  text-align: left;
  padding-right: 70px;
  line-height: 70px;
`;

export const Span = styled.span`
  font-weight: 900;
`;

export const SmallerText = styled.div`
  font-family: "Outfit", sans-serif;
  color: #797bec;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 180px;
  height: 36px;
  border-radius: 50px;
  background: #797bec;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(99%);
  }
`;

export const ImgMozg = styled.img`
  width: 400px;
  position: absolute;
  right: 165px;
  bottom: 0px;
`;