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

  useEffect(() => {
    isUserLogged == null ? navigate("/") : navigate("/home");
  }, []);

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
                Let's begin by exploring a few steps that can help you create a
                sense of comfort and ease. Our healing journey includes relaxing
                music, breathing exercises, therapy with your favorite animals
                and sounds of nature. Lastly, you will see some additional
                suggestions to enhance your well-being and promote a positive
                mindset.
              </Styled.Paragraph>
              <Styled.WrapperButtons>
                <Styled.Button onClick={() => navigate("/quiz")}>
                  START TEST
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
