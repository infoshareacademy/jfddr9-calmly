import { useDispatch } from "react-redux";
import * as Styled from "./SupportPage.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";

export const SupportPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgSupport"));
  }, [dispatch]);
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