import styled from "styled-components";

export const Logo = styled.img`
  width: 480px;
`;

export const Wrapper = styled.div`
  background-image: url("src/assets/g page.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin-bottom: 80px;
  margin-top: -10px;
`;

export const Paragraph = styled.p`
  margin-bottom: 50px;
  padding-inline: 40px;
`;

export const Button = styled.div`
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
