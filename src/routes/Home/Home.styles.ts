import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("src/assets/h page.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  font-family: "Outfit", sans-serif;
`;

export const LogoWhite = styled.img`
  position: absolute;
  width: 250px;
  height: 78.95px;
  left: 100px;
  top: 116px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-size: 12px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: flex;
  gap: 40px;

  & a {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  position: absolute;
  top: 130px;
  right: 250px;
  color: white;
`;

export const WrapperText = styled.div`
  width: 400px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const Header = styled.div`
  margin-top: 60px;
  font-size: 40px;
  font-weight: 600;
  & span {
    font-weight: 700;
  }
`;

export const TextUnderHeader = styled.div`
  font-size: 30px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);

  & span {
    color: rgb(255, 255, 255);
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 40px;
  padding-right: 70px;
  text-align: justify;
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
  border: none;
  width: 105px;
  height: 34px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
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

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 150px;
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
