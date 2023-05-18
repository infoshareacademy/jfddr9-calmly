import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
import { auth } from "../../api/firebase"; //
import { signOut } from "firebase/auth"; //
//import { Footer } from "../footer/Footer"; //

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <>
        <Styled.LogoWhite src="src/assets/logo.png" />
        <Styled.WrapperContent>
          <Styled.Nav>
            <a onClick={() => navigate("/feelbetter")}>Let's feel better</a>
            <a onClick={() => navigate("/support")}>Support</a>
            <a onClick={() => navigate("/about")}>About us</a>
            <Styled.ButtonLogOut onClick={() => signOut(auth)}>
              Log out
            </Styled.ButtonLogOut>
          </Styled.Nav>
          <Styled.WrapperText>
            <Styled.Header>
              Hi, <span>{authUser.fullName}!</span>
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
              <Styled.Button onClick={() => navigate("/quiz")}>
                START
              </Styled.Button>
              <Styled.Button onClick={() => navigate("/journal")}>
                JOURNAL
              </Styled.Button>
            </Styled.WrapperButtons>
          </Styled.WrapperText>
        </Styled.WrapperContent>
      </>
    </Styled.Wrapper>
  );
};
