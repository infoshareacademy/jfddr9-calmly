import { useNavigate } from "react-router-dom";
import * as Styled from "./TestResultPage.styles";

interface TestResultPageProps {
  stressLevel: "middle" | "low" | "high";
}

export const TestResultPage = ({ stressLevel }: TestResultPageProps) => {
  const navigate = useNavigate();
  return (
    <Styled.Wrapper>
      <Styled.Background />

      <Styled.Img src="src/assets/logo-white.png"></Styled.Img>
      <Styled.WrapperContent>
        <Styled.Text>
          Your stress level is in the{" "}
          <Styled.Span>{stressLevel ? stressLevel : "middle"}</Styled.Span>{" "}
          range
        </Styled.Text>
        <Styled.SmallerText>result based on test answers</Styled.SmallerText>
        {/* buttons container */}
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/feelbetter")}>
            Let's feel better!
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/home")}>
            Home???
          </Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
      <Styled.ImgMozg src="src/assets/mózg 1.png" />
    </Styled.Wrapper>
  );
};
