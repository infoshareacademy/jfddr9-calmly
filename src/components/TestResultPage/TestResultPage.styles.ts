import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: white !important;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/Resultbackground.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  top: -50px;
  transform: scaleX(-1);

  @media (max-width: 1450px) {
    background-size: 120%;
  }

  @media (max-width: 1150px) {
    background-size: 140%;
  }

  @media (max-width: 1000px) {
    background-size: 175%;
  }

  @media (max-width: 800px) {
    background-size: 200%;
  }

  @media (max-width: 650px) {
    background-size: 280%;
  }

  @media (max-width: 500px) {
    top: -20px;
    background-size: 350%;
  }

  @media (max-width: 380px) {
    top: 0px;
    background-size: 200%;
  }
`;

export const WrapperContent = styled.div`
  position: absolute;
  bottom: 50px;
  right: 40px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 400px;
  padding-right: 70px;

  @media (max-width: 800px) {
    align-items: center;
    padding-right: 0px;
    right: 0px;
    width: auto;
    margin: 40px;
  }

  @media (max-width: 500px) {
    margin: 0px;
  }

  // @media (max-width: 380px) {
  //   margin: 0px;
  //   bottom: 200px;
  // }

  @media (min-width: 2000px) {
    height: 600px;
    width: 850px;
    padding-right: 140px;
  }

  @media (min-width: 3000px) {
    height: 600px;
    width: 850px;
    padding-right: 170px;
  }
`;

export const Text = styled.div`
  font-family: "Outfit", sans-serif;
  color: #797bec;
  font-size: 60px;
  font-weight: 600;
  text-align: right;
  line-height: 70px;

  @media (max-width: 800px) {
    text-align: center;
  }

  @media (max-width: 300px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (min-width: 2000px) {
    font-size: 80px;
    line-height: 90px;
  }

  @media (min-width: 3000px) {
    font-size: 90px;
    line-height: 110px;
  }
`;

export const Span = styled.span`
  font-weight: 900;
`;

export const SmallerText = styled.div`
  font-family: "Outfit", sans-serif;
  color: #797bec;
  font-size: 16px;
  margin-bottom: 32px;
  align-items: center;
  text-align: right;

  @media (min-width: 2000px) {
    font-size: 20px;
  }

  @media (min-width: 3000px) {
    font-size: 25px;
  }

  @media (max-width: 300px) {
    font-size: 10px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 15px;
  text-align: right;

  @media (max-width: 380px) {
    flex-direction: column;
  }
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

  @media (max-width: 200px) {
    width: 100px;
    font-size: 10px;
  }

  @media (min-width: 2000px) {
    width: 230px;
    height: 45px;
    font-size: 16px;
  }

  @media (min-width: 3000px) {
    width: 360px;
    height: 74px;
    font-size: 25px;
  }
`;
