import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
//import { auth } from "../../api/firebase";//
//import { signOut } from "firebase/auth"; //
//import { Footer } from "../footer/Footer"; //

export const Home = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();//

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <Styled.LogoWhite src="src/assets/logo.png" />
      <Styled.WrapperContent>
        <Styled.Nav>
          <a>Let's feel better</a>
          <a>Support</a>
          <a>About us</a>
          <Styled.ButtonLogOut>Log out</Styled.ButtonLogOut>
        </Styled.Nav>
        <Styled.WrapperText>
          <Styled.Header>
            Hi, <span>Janusz!</span>
          </Styled.Header>
          <Styled.TextUnderHeader>
            Let your <span>stress</span> drop
          </Styled.TextUnderHeader>
          <Styled.Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            facilis officia velit facere libero reprehenderit! Perspiciatis
            saepe illum repellat labore? Deleniti atque ex qui? Consequatur
            obcaecati repellat quod tempore perspiciatis.
          </Styled.Paragraph>
          <Styled.WrapperButtons>
            <Styled.Button>START</Styled.Button>
            <Styled.Button>JOURNAL</Styled.Button>
          </Styled.WrapperButtons>
        </Styled.WrapperText>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
