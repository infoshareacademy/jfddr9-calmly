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

  return (
    <>
      <Navigation src="src/assets/logo-violet.png"></Navigation>
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
    </>
  );
};
