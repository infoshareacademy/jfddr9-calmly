import { useDispatch } from "react-redux";
import * as Styled from "./AreYou.styles";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { updateBg } from "../../store/slice";
// import { Footer } from "../footer/Footer"; //

type AreYouProps = {
  stepReset: (newCount: number) => void;
};

export const AreYou = (props: AreYouProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.stepReset(6);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Text>Are you feeling better?</Styled.Text>
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/home")}>
            Yes, I feel better!
          </Styled.Button>
          <Styled.Button onClick={handleClick}>
            No, I need to do it again
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/support")}>
            No, I need help
          </Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
