import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Styled from "./Home.styles";
import { useEffect, useState } from "react";
import { updateBg } from "../../store/slice";
import { Navigation } from "../../components/Navigation";
import { RootState } from "../../store/store";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { authUser }: any = useSelector((state) => state);
  const authUser = useSelector((state: RootState) => state.authUser);

  const [logoSrc, setLogoSrc] = useState("");
  const [isSizeSmall, setIsSizeSmall] = useState(window.innerWidth < 1200);

  useEffect(() => {
    dispatch(updateBg("bgHome"));
  }, [dispatch]);

  const isUserLogged = authUser.fullName;

  useEffect(() => {
    isUserLogged == null ? navigate("/") : navigate("/home");
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        setIsSizeSmall(true);
      } else {
        setIsSizeSmall(false);
      }
    });
  }, []);

  useEffect(() => {
    const shouldBeWhite = pathname === "/home" && isSizeSmall;
    setLogoSrc(shouldBeWhite ? "/logo-white.png" : "/logo-violet.png");
  }, [pathname, isSizeSmall]);

  return (
    <>
      <Navigation
        src={logoSrc}
        // src={logoWhiteViolet}
        alt="Calmly logo in violet colour and white"
        srcHamburger="/MenuWhite.svg"
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
                Lets begin by exploring a few steps that can help you create a
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
