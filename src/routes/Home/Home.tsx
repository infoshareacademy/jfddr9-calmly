import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
//import { Footer } from "../footer/Footer"; //

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Nav>
          <Styled.LogoWhite src="src/assets/logo-white.png" />
          <ul>
            <li onClick={() => navigate("/feelbetter")}>Let's feel better</li>
            <li>Support</li>
            <li onClick={() => navigate("/about")}>About us</li>
            <li>
              <Styled.Button onClick={() => signOut(auth)}>
                Log out
              </Styled.Button>
            </li>
          </ul>
        </Styled.Nav>
        <Styled.TextUnderLogo>Let your stress drop</Styled.TextUnderLogo>
        <Styled.Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          facilis officia velit facere libero reprehenderit! Perspiciatis saepe
          illum repellat labore? Deleniti atque ex qui? Consequatur obcaecati
          repellat quod tempore perspiciatis.
        </Styled.Paragraph>
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/quiz")}>START</Styled.Button>
          <Styled.Button>JOURNAL</Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
