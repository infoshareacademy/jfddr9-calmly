import { useDispatch } from "react-redux";
import * as Styled from "./LandingPage.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";

//import { Footer } from "../footer/Footer"; //

export const LandingPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgLandingPage"));
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Logo src="/logo.png" alt="Calmly logo" />
        <Styled.TextUnderLogo>let your stress drop</Styled.TextUnderLogo>
        <Styled.Paragraph>
          Calmly offers an interactive toolkit that will measure your stress and
          provide the necessary tools to brighten your day. Our mission is to
          help you feel better, focus on your needs and try to live
          here-and-now. Complete these few steps and enjoy our tips to improve
          your well-being.
        </Styled.Paragraph>
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/register")}>
            SIGN UP
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/login")}>
            SIGN IN
          </Styled.Button>
        </Styled.WrapperButtons>
        <Styled.ButtonSmaller onClick={() => navigate("/feelbetter")}>
          FEEL BETTER
        </Styled.ButtonSmaller>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
