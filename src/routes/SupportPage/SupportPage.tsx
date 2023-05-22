import * as Styled from "./SupportPage.styles";

export const SupportPage = () => {
  return (
    <Styled.Background>
      <Styled.Wrapper>
        <Styled.WrapperLeft>
          <h2>Are you in a crisis?</h2>
          <p>If you need help or psychological support, please call:</p>
          <span>+48 123 456 789</span>
          <h3>Free 24/7 support at your fingertips.</h3>
        </Styled.WrapperLeft>
        <Styled.WrapperRight>
          <img src="src/assets/Texting.png" />
        </Styled.WrapperRight>
      </Styled.Wrapper>
      <Styled.Img src="src/assets/logo-white.png"></Styled.Img>
    </Styled.Background>
  );
};
