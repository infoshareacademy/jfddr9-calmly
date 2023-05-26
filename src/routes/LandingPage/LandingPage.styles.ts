import styled from "styled-components";

export const Logo = styled.img`
  width: 480px;

  @media (max-width: 1300px) {
    width: 50vw;
  }
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
  font-family: "Outfit", sans-serif;

  @media (max-width: 1300px) {
    background-size: 0%;
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

  @media (max-width: 1300px) {
    width: 80vw;
    margin-left: 0;
    margin 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 30px
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const TextUnderLogo = styled.div`
  margin-bottom: 80px;
  margin-top: -10px;

  @media (max-width: 1300px) {
    margin-bottom: 40px;
  }
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
  font-weight: 600;
  margin-bottom: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Outfit", sans-serif;

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(99%);
  }

  @media (max-width: 450px) {
    margin-bottom: 30px;
    width: 60vw;
  }

  @media (max-width: 375px) {
    margin-bottom: 20px;
    height: 30px;
  }
`;

export const ButtonSmaller = styled.div`
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
  font-weight: 600;
  margin-bottom: 40px;
  font-size: 16px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: 0.3s ease-in;
    opacity: 0.9;
    transform: scale(103%);
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(99%);
  }

  @media (max-width: 450px) {
    width: 60vw;
  }

  @media (max-width: 375px) {
    height: 30px;
  }
`;
