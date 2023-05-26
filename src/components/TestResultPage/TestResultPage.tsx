import { useNavigate } from "react-router-dom";
import * as Styled from "./TestResultPage.styles";
import { PinnedSmallLogo } from "../PinnedSmallLogo";

interface TestResultPageProps {
  stressLevel: "middle" | "low" | "high";
}

export const TestResultPage = ({ stressLevel }: TestResultPageProps) => {
  const navigate = useNavigate();
  return (
    <Styled.Wrapper>
      <Styled.Background />

      <PinnedSmallLogo />
      <Styled.WrapperContent>
        <Styled.Text>
          Your stress level is in the <Styled.Span>{stressLevel}</Styled.Span>{" "}
          range
        </Styled.Text>
        <Styled.SmallerText>result based on test answers</Styled.SmallerText>
        {/* buttons container */}
        <Styled.WrapperButtons>
          <Styled.Button onClick={() => navigate("/feelbetter")}>
            Lets feel better!
          </Styled.Button>
          <Styled.Button onClick={() => navigate("/home")}>Home</Styled.Button>
        </Styled.WrapperButtons>
      </Styled.WrapperContent>
    </Styled.Wrapper>
  );
};
