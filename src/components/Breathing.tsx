import styled from "styled-components";
import { useEffect, useState } from "react";

const MainDiv = styled.div`
  height: 100%;
`;
interface MainCircleProps {
  state: boolean;
}
const Instructions = styled.p`
  z-index: 999;
  text-align: center;
  font-size: 24px;
  color: #797bec;
`;
const Information = styled.p`
  position: relative;
  top: 120px;
  z-index: 999;
  text-align: center;
  font-size: 18px;
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
interface BodyProps {
  dark: boolean;
}
const Body = styled.body<BodyProps>`
  display: flex;
  flex-direction: column;
  background: rgb(246, 197, 156);
  background: radial-gradient(
    circle,
    rgba(246, 197, 156, 1) 0%,
    rgba(227, 180, 171, 1) 45%,
    rgba(179, 180, 239, 1) 100%
  );
  align-items: center;
  justify-content: center;
  animation: anim 8s 14 0.1s alternate backwards;
  animation-play-state: ${(props) => (props.dark ? "running" : "paused")};
  @keyframes anim {
    0% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 0%,
        rgba(227, 180, 171, 1) 1%,
        rgba(179, 180, 239, 1) 60%
      );
    }
    5% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 0%,
        rgba(227, 180, 171, 1) 2%,
        rgba(179, 180, 239, 1) 60%
      );
    }
    10% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 0%,
        rgba(227, 180, 171, 1) 10%,
        rgba(179, 180, 239, 1) 70%
      );
    }
    15% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 10%,
        rgba(227, 180, 171, 1) 20%,
        rgba(179, 180, 239, 1) 85%
      );
    }
    20% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 20%,
        rgba(227, 180, 171, 1) 30%,
        rgba(179, 180, 239, 1) 80%
      );
    }
    25% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 30%,
        rgba(227, 180, 171, 1) 40%,
        rgba(179, 180, 239, 1) 85%
      );
    }
    30% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 40%,
        rgba(227, 180, 171, 1) 50%,
        rgba(179, 180, 239, 1) 90%
      );
    }
    35% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 50%,
        rgba(227, 180, 171, 1) 60%,
        rgba(179, 180, 239, 1) 95%
      );
    }
    40% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 60%,
        rgba(227, 180, 171, 1) 70%,
        rgba(179, 180, 239, 1) 95%
      );
    }
    45% {
      background: radial-gradient(
        circle,
        rgba(246, 197, 156, 1) 70%,
        rgba(227, 180, 171, 1) 80%,
        rgba(179, 180, 239, 1) 100%
      );
    }
    50% {
      background: rgba(246, 197, 156, 1);
    }
    55% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 40%,
        rgba(246, 197, 156, 1) 70%
      );
    }
    60% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 25%,
        rgba(246, 197, 156, 1) 75%
      );
    }
    65% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 15%,
        rgba(246, 197, 156, 1) 85%
      );
    }
    70% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 5%,
        rgba(246, 197, 156, 1) 95%
      );
    }
    75% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 2%,
        rgba(246, 197, 156, 1) 98%
      );
    }
    100% {
      background: radial-gradient(
        circle,
        rgba(227, 180, 171, 1) 1%,
        rgba(246, 197, 156, 1) 99%
      );
    }
  }
`;
const ButtonDiv = styled.div`
  position: absolute;
  bottom: 80px;
  z-index: 999;
`;
const StartButton = styled.button`
z-index:999;
  color: #797bec;
  margin-top: 120px;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-family: "Outfit", sans-serif;
  background-color: #ffffff84;
  &:hover {
    transition: 0.5s;
    background-color: white;
  }
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
  const handleClick = () => {
    setState(!state);
    setDark(!dark);
    setInhale(inhale);
    setInstru((is) => !is);
    setVisible(true);
    setDispaly(false);
  };

  return (
    <Body dark={dark}>
      <MainDiv>
        <MainCircle state={state} />
      </MainDiv>
      {visible && <Instructions>{inhale}</Instructions>}
      <ButtonDiv>
        {display && <Information>Let's breath together</Information>}
        <StartButton onClick={handleClick}>
          {dark ? "Pause" : "Start"}
        </StartButton>
      </ButtonDiv>
    </Body>
  );
}
