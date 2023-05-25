import styled from "styled-components";

const GraphicCardWrapper = styled.div`
  width: 650px;
  height: 688px;
  margin: 15px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  @media (max-width: 950px) {
    width: 445px;
  }
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

const Graphic = styled.img`
  // background: #e3b4ab;
  width: 390px;
  height: 390px;
  margin: 0 auto 0;
`;

const ParagraphGraphicCard = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #797bec;
`;

type GraphicsCardProps = {
  src: string;
  alt: string;
};
export const GraphicsCard = ({ src }: GraphicsCardProps) => {
  return (
    <GraphicCardWrapper>
      <LogoMain src="src/assets/logo.png" />
      <HeaderGraphicCard>welcome again</HeaderGraphicCard>
      <Graphic src={src} />
      <ParagraphGraphicCard>let your stress drop</ParagraphGraphicCard>
    </GraphicCardWrapper>
  );
};
