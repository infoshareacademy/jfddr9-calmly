import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBg, updateBreathing } from "../store/slice";

const MainDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
interface MainCircleProps {
  state: boolean;
}
const InstructionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Instructions = styled.p`
  font-size: 20px;
  color: #797bec;
  position: absolute;
  margin: auto;
`;

const Information = styled.p`
  position: relative;
  text-align: center;
  font-size: 22px;
  color: #ffffff;
`;
const MainCircle = styled.div<MainCircleProps>`
  z-index: 998;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  background-color: white;
  display: flex;
  justify-content: center;
  animation: animation 8s 14 normal backwards;
  animation-play-state: ${(props) => (props.state ? "running" : "paused")};
  @keyframes animation {
    10%,
    90% {
      transform: scale(1);
    }
    40%,
    60% {
      transform: scale(2);
    }
  }
`;
const ButtonDiv = styled.div`
  z-index: 999;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StartButton = styled.button`
  background-color: white;
  color: #797bec;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  z-index: 999;
  height: 41px;
  width: 217px;
  margin-bottom: 12px;
  font-weigth: 400;
  font-size: 20px;
  font-family: "Outfit", sans-serif;
  background-color: #ffffff84;
  &:hover {
    transition: 0.5s;
    background-color: white;
  }
`;

export function Breathing() {
  const [state, setState] = useState(false);
  const [dark, setDark] = useState(false);
  const [inhale, setInhale] = useState("inhale");
  const [count, setCount] = useState(0);
  const [instru, setInstru] = useState(false);
  const [visible, setVisible] = useState(false);
  const [display, setDispaly] = useState(true);
  useEffect(() => {
    if (visible && instru && count < 28) {
      const timer = setTimeout(() => {
        setInhale((inhState) => (inhState === "inhale" ? "exhale" : "inhale"));
        setCount((prevCount) => prevCount + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [count, instru]);
  const dispatch = useDispatch();

  dispatch(updateBg("bgCircle")); //zmiana samego tła

  const handleClick = () => {
    setState(!state);
    setDark(!dark);
    dispatch(updateBreathing()); //uruchomienie animacji tła
    setInhale(inhale);
    setInstru((is) => !is);
    setVisible(true);
    setDispaly(false);
  };

  return (
    <>
      <MainDiv>
        <MainCircle state={state}>
          <InstructionDiv>
            {visible && <Instructions>{inhale}</Instructions>}
          </InstructionDiv>
        </MainCircle>
        <ButtonDiv>
          {display && <Information>Let's breath together</Information>}
          <StartButton onClick={handleClick}>
            {dark ? "pause" : "start"}
          </StartButton>
        </ButtonDiv>
      </MainDiv>
    </>
  );
}
