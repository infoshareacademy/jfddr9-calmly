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
          <a>If you need help or psychological support, please call:</a>
          <span>PL +48 800 70 2222</span>
          <span>EN 116 123</span>
          <h3>free 24/7 support at your fingertips</h3>
        </Styled.WrapperLeft>
        <Styled.WrapperRight>
          <img src="src/assets/sadcat.png" />
        </Styled.WrapperRight>
      </Styled.Wrapper>
    </Styled.Background>
  );
};
