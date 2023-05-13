import styled from "styled-components";

const GraphicCardWrapper = styled.div`
  width: 650px;
  height: 688px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;
const LogoMain = styled.img`
  width: 270px;
  height: 85.27px;
  margin-top: 60px;
`;

const HeaderGraphicCard = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  margin-top: -20px;
  color: #797bec;
`;

const Graphic = styled.div`
  background: #e3b4ab;
  width: 450px;
  height: 350px;
  margin: 50px auto 0;
`;

const ParagraphGraphicCard = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #797bec;
`;

const LogoFooter = styled.img`
  width: 70px;
  height: 22.11px;
  display: flex;
  margin-left: auto;
  margin-right: 50px;
`;

export const GraphicsCard = () => {
  return (
    <GraphicCardWrapper>
      <LogoMain src="src/assets/logo.png" />
      <HeaderGraphicCard>welcome again</HeaderGraphicCard>
      <Graphic />
      <ParagraphGraphicCard>let your stress drop</ParagraphGraphicCard>
      <LogoFooter src="src/assets/logo.png" />
    </GraphicCardWrapper>
  );
};
