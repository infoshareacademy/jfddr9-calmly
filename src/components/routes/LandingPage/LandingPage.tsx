import * as Styled from "./LandingPage.styles";
//import { Footer } from "../footer/Footer"; //

export const LandingPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Logo src="src/assets/logo.png" />
        <Styled.TextUnderLogo>let your stress drop</Styled.TextUnderLogo>
        <Styled.Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          facilis officia velit facere libero reprehenderit! Perspiciatis saepe
          illum repellat labore? Deleniti atque ex qui? Consequatur obcaecati
          repellat quod tempore perspiciatis.
        </Styled.Paragraph>
        <Styled.WrapperButtons>
          <Styled.Button>SIGN UP</Styled.Button>
          <Styled.Button>SIGN IN</Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
