import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/feelingbetter esukt.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Outfit", sans-serif;
  @media only screen and (max-width: 1200px) {
    background-image: none;
    background: linear-gradient(243.18deg, #eebda3 0%, #9495ed 100%);
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-left: 110px;
  color: #797bec;

  @media only screen and (max-width: 1150px) {
    width: auto;
    margin: 0 auto;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  left: 355px;
  top: 400px;

  @media only screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    position: inherit;
    justify-content: center;
    flex-wrap: wrap;
    left: 0;
    top: 0;
    margin-top: 185px;
  }
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    position: inherit;
    justify-content: center;
    flex-wrap: wrap;
    left: 0;
    top: 0;
    margin-top: 480px;
  }
`;
export const Text = styled.a`
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
  @media only screen and (max-width: 1200px) {
    width: auto; 
    height: auto;
    left: 0; 
    top: 0; 
    display: flex;
    font-size: 78px;
    margin-top: 80px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px; /
  }
`;

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  padding: 16px;
  font-size: 18px;
  font-weight: 700;
  background-color: white;
  color: #e3b4ab;
  border-radius: 50px;
  border: none;
  text-align: center;
  &:hover {
    color: #9495ed;
  }
`;
