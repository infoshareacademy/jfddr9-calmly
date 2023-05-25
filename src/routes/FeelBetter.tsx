import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faLungs } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

import { updateBg } from "../store/slice";
import { useDispatch } from "react-redux";

import { SpotifyAPI } from "../api/SpotifyAPI";
import { CutePictures } from "../api/CutePicturesAPI";
import { Breathing } from "../components/Breathing/Breathing";
import { Tips } from "../components/Tips/Tips";

import { AreYou } from "../components/AreYou/AreYou";
import { NatureSound } from "../components/NatureSound";
import { useNavigate } from "react-router-dom";
import { PinnedSmallLogo } from "../components/PinnedSmallLogo";

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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateBg("bgRadial"));
  }, [dispatch]);

  const handleStepChange = () => {
    setStep(1);
  };
  step === 0 && navigate("/home");

  return (
    <>
      <PinnedSmallLogo />
      <StyledDiv>
        {step === 6 ? (
          <AreYou stepReset={handleStepChange} />
        ) : (
          <>
            <StyledStepContainer>
              <StyledStep key={step}>
                {step === 1 && <SpotifyAPI />}
                {step === 2 && <Breathing />}
                {step === 3 && <CutePictures />}
                {step === 4 && <NatureSound />}
                {step === 5 && <Tips />}
              </StyledStep>
            </StyledStepContainer>
            <StepperContainer>
              <StepButton onClick={() => setStep(step - 1)}>{"<"}</StepButton>
              <Tooltip
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                id="my-tooltip-music"
              />
              <StyledStepButton
                data-tooltip-id="my-tooltip-music"
                data-tooltip-content="Calming Music"
                data-tooltip-place="bottom"
                currentStep={step === 1}
                onClick={() => setStep(1)}
              >
                <FontAwesomeIcon icon={faMusic} />
              </StyledStepButton>
              <Tooltip
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                id="my-tooltip-breathe"
              />
              <StyledStepButton
                data-tooltip-id="my-tooltip-breathe"
                data-tooltip-content="Breathing Exercise"
                data-tooltip-place="bottom"
                currentStep={step === 2}
                onClick={() => setStep(2)}
              >
                <FontAwesomeIcon icon={faLungs} />
              </StyledStepButton>
              <Tooltip
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                id="my-tooltip-animal"
              />
              <StyledStepButton
                data-tooltip-id="my-tooltip-animal"
                data-tooltip-content="Cute Animal Pictures"
                data-tooltip-place="bottom"
                currentStep={step === 3}
                onClick={() => setStep(3)}
              >
                <FontAwesomeIcon icon={faPaw} />
              </StyledStepButton>
              <Tooltip
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                id="my-tooltip-weather"
              />
              <StyledStepButton
                data-tooltip-id="my-tooltip-weather"
                data-tooltip-content="Relaxing Sounds"
                data-tooltip-place="bottom"
                currentStep={step === 4}
                onClick={() => setStep(4)}
              >
                <FontAwesomeIcon icon={faCloudSun} />
              </StyledStepButton>
              <Tooltip
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "normal",
                  fontWeight: "500",
                }}
                id="my-tooltip-tips"
              />
              <StyledStepButton
                data-tooltip-id="my-tooltip-tips"
                data-tooltip-content="Additional Tips"
                data-tooltip-place="bottom"
                currentStep={step === 5}
                onClick={() => setStep(5)}
              >
                <FontAwesomeIcon icon={faComment} />
              </StyledStepButton>
              <StepButton onClick={() => setStep(step + 1)}>{">"}</StepButton>
            </StepperContainer>
          </>
        )}
      </StyledDiv>
    </>
  );
};
