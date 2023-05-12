import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { updateBg } from "../store/slice";
import { useDispatch } from "react-redux";

import { SpotifyAPI } from "../api/SpotifyAPI";
import { CutePictures } from "../api/CutePicturesAPI";
import { Breathing } from "../components/Breathing/Breathing";

import { AreYou } from "../components/AreYou/AreYou";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledStepContainer = styled.div`
  width: 90%;
  height: 70%;
  border: 0;
`;

const StyledStep = styled.div`
  width: 100%;
  height: 100%;

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledDiv = styled.div`
  margin: auto;
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 1px;
`;

const StepButton = styled.button`
  background: rgba(255, 255, 255, 0.45);
  border-radius: 50px;
  border: 0;
  width: 30px;
  height: 30px;
  margin-inline: 10px;
  color: #797bec;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

type StepButtonType = {
  currentStep: boolean;
};

const StyledStepButton = styled.button<StepButtonType>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) =>
    props.currentStep ? "white" : "rgba(255, 255, 255, 0.45)"};
  color: #797bec;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const FeelBetter = () => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  const handleStepChange = () => {
    setStep(1);
  };

  return (
    <StyledDiv>
      {step === 4 ? (
        <AreYou stepReset={handleStepChange} />
      ) : (
        <>
          <StyledStepContainer>
            <StyledStep key={step}>
              {step === 1 && <SpotifyAPI />}
              {step === 2 && <Breathing />}
              {step === 3 && <CutePictures />}
            </StyledStep>
          </StyledStepContainer>
          <StepperContainer>
            <StepButton onClick={() => setStep(step - 1)} disabled={step === 1}>
              {"<"}
            </StepButton>
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
            <StepButton onClick={() => setStep(step + 1)}>{">"}</StepButton>
          </StepperContainer>
        </>
      )}
    </StyledDiv>
  );
};
