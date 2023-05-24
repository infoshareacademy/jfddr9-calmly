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
        <Styled.Logo src="src/assets/logo.png" alt="Calmly company's logo" />
        <Styled.TextUnderLogo>let your stress drop</Styled.TextUnderLogo>
        <Styled.Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          facilis officia velit facere libero reprehenderit! Perspiciatis saepe
          illum repellat labore? Deleniti atque ex qui? Consequatur obcaecati
          repellat quod tempore perspiciatis.
        </Styled.Paragraph>
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/register")}>
            SIGN UP
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/login")}>
            SIGN IN
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/feelbetter")}>
            FEEL BETTER
          </Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
