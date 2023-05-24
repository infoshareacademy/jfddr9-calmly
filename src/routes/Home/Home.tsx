import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Home.styles";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
import { Navigation } from "../../components/Navigation";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);

  const isUserLogged = authUser.fullName;

  console.log("isUserLoged", isUserLogged);

  isUserLogged == null ? navigate("/") : navigate("/home");

  return (
    <>
      <Navigation
        src="src/assets/logo-violet.png"
        alt="Calmly company's logo in violet colour"
        srcHamburger="src/assets/MenuPrpl.svg"
      ></Navigation>
      <Styled.Wrapper>
        <>
          <Styled.WrapperContent>
            <Styled.WrapperText>
              <Styled.Header>
                Hi, <span>{authUser.fullName}!</span>
              </Styled.Header>
              <Styled.TextUnderHeader>
                Let your <span>stress</span> drop
              </Styled.TextUnderHeader>
              <Styled.Paragraph>
                Calmly offers an interactive toolkit that will measure your
                stress and provide the necessary tools to brighten your day. Our
                mission is to help you feel better, focus on your needs and try
                to live here-and-now. Complete these few steps and enjoy our
                tips to improve your well-being
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
    </>
  );
};
