import styled from "styled-components";

import { Register } from "../auth/Register";

const MainWrapper = styled.div`
  font-family: "Outfit";
  display: flex;
  justify-content: center;
`;

const CreatorCardWrapper = styled.div`
  width: 635px;
  height: 688px;
  margin: 15px;
  padding: 0 60px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

const GraphicCardWrapper = styled.div`
  min-width: 445px;
  max-width: 445px;
  height: 688px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;
const NavWrapperCreatorCard = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const NavParagraphCreatorCard = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #797bec;
`;

const NavButtonCreatorCard = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-family: "Outfit";
  background: #ffffff;
  border-radius: 50px;
  border: 0;
  margin-top: 5px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #797bec;
`;

const HeaderGraphicCard = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  margin-top: 105px;
  margin-bottom: 5px;
  color: #797bec;
`;

const LogoMain = styled.img`
  width: 270px;
  height: 85.27px;
  margin-bottom: 50px;
`;

const Graphic = styled.div`
  background: #e3b4ab;
  width: 332px;
  height: 185px;
  margin: 0 auto;
`;

const ParagraphGraphicCard = styled.p`
  // font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  margin-top: 100px;
  color: #797bec;
`;

const LogoFooter = styled.img`
  width: 70px;
  height: 22.11px;
  margin-left: 250px;
`;

export const RegisterPage = () => {
  return (
    <MainWrapper>
      <CreatorCardWrapper>
        <NavWrapperCreatorCard>
          <NavParagraphCreatorCard>
            Already have an account?
          </NavParagraphCreatorCard>
          <NavButtonCreatorCard>Sign in</NavButtonCreatorCard>
        </NavWrapperCreatorCard>
        <Register />
      </CreatorCardWrapper>
      <GraphicCardWrapper>
        <HeaderGraphicCard>Welcome to</HeaderGraphicCard>
        <LogoMain src="src/assets/logo.png" />
        <Graphic />
        <ParagraphGraphicCard>let your stress drop</ParagraphGraphicCard>
        <LogoFooter src="src/assets/logo.png" />
      </GraphicCardWrapper>
    </MainWrapper>
  );
};
