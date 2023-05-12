import * as Styled from "./AreYou.styles";
// import { Footer } from "../footer/Footer"; //

export const AreYou = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperContent>
        <Styled.Text>Are you feeling better?</Styled.Text>
        <Styled.WrapperButtons>
          <Styled.Button>Yes, I feel better!</Styled.Button>
          <Styled.Button>No, I need to do it again</Styled.Button>
          <Styled.Button>No, I need help</Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
