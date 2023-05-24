import { useDispatch } from "react-redux";
import * as Styled from "./SupportPage.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
import { Navigation } from "../../components/Navigation";

export const SupportPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgSupport"));
  }, [dispatch]);
  return (
    <Styled.Background>
      <Navigation
        src="src/assets/logo-white.png"
        srcHamburger="src/assets/MenuWhite.svg"
      />
      <Styled.Wrapper>
        <Styled.WrapperLeft>
          <h2>Are you in a crisis?</h2>
          <p>If you need help or psychological support, please call:</p>
          <span>+48 123 456 789</span>
          <h3>free 24/7 support at your fingertips</h3>
        </Styled.WrapperLeft>
        <Styled.WrapperRight>
          <img src="src/assets/Texting.png" />
        </Styled.WrapperRight>
      </Styled.Wrapper>
    </Styled.Background>
  );
};
