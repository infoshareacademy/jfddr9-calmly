import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Outfit", sans-serif;
`;

export const LogoWhite = styled.img`
  width: 250px;
  height: 78.95px;
  left: 140px;
  top: 116px;
`;

export const Nav = styled.a`
  width: 331px;
  height: 30px;
  left: 922px;
  top: 100px;
  font-family: "Outfit";
  font-style: normal;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  margin-left: 500px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-left: 110px;
  color: #797bec;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 30px;
`;

export const TextUnderLogo = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
`;

export const Paragraph = styled.p`
  margin-bottom: 50px;
  padding-inline: 40px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 56px;
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
