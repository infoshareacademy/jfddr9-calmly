import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { SpotifyAPI } from "../api/SpotifyAPI";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledStepContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: green;
  margin-top: 5%;
`;

const StyledStep = styled.div`
  width: 100%;
  height: 100%;

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledDiv = styled.div`
  width: 70vw;
  height: 60vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepperContainer = styled.div`
  display: flex;
  margin-top: 5%;
`;

type StepButtonType = {
  currentStep: boolean;
};

const StyledStepButton = styled.button<StepButtonType>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) => (props.currentStep ? "blue" : "black")};
`;

export const FeelBetter = () => {
  const [step, setStep] = useState(1);

  return (
    <StyledDiv>
      {step === 4 ? (
        "Are you feeling better?"
      ) : (
        <>
          <StyledStepContainer>
            <StyledStep key={step}>
              {step === 1 && <SpotifyAPI />}
              {step === 2 && "Breathing Exercise"}
              {step === 3 && "Cute Pictures"}
            </StyledStep>
          </StyledStepContainer>
          <StepperContainer>
            <button onClick={() => setStep(step - 1)} disabled={step === 1}>
              Back
            </button>
            <StyledStepButton
              currentStep={step === 1}
              onClick={() => setStep(1)}
            >
              1
            </StyledStepButton>
            <StyledStepButton
              currentStep={step === 2}
              onClick={() => setStep(2)}
            >
              2
            </StyledStepButton>
            <StyledStepButton
              currentStep={step === 3}
              onClick={() => setStep(3)}
            >
              3
            </StyledStepButton>
            <button onClick={() => setStep(step + 1)}>
              {step === 3 ? "Finish" : "Next"}
            </button>
          </StepperContainer>
        </>
      )}
    </StyledDiv>
  );
};
