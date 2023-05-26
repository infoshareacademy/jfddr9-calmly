import React from "react";
import styled from "styled-components";
import elipse1 from "../../assets/elipses/Ellipse 1.svg";
import elipse2 from "../../assets/elipses/Ellipse 2.svg";
import elipse3 from "../../assets/elipses/Ellipse 3.svg";
import elipse4 from "../../assets/elipses/Ellipse 4.svg";
import elipse5 from "../../assets/elipses/Ellipse 5.svg";
import elipse6 from "../../assets/elipses/Ellipse 6.svg";
import elipse7 from "../../assets/elipses/Ellipse 7.svg";
import elipse9 from "../../assets/elipses/Ellipse 9.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  padding: 185px;
  border-radius: 18px;
  align-items: center;
`;
const ScoreP = styled.p`
  position: absolute;
  color: #797bec;
  font-size: 26px;
  font-weight: 600;
`;
const Circle = styled.img`
  position: absolute;
`;
const Circle1 = styled.img`
  position: absolute;
  animation: rotate 45s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Circle2 = styled.img`
  position: absolute;
  animation: rotate 35s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Circle3 = styled.img`
  position: absolute;
  animation: rotate 45s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Circle4 = styled.img`
  position: absolute;
  animation: rotate 45s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Circle5 = styled.img`
  position: absolute;
  animation: rotate 35s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Circle6 = styled.img`
  position: absolute;
  animation: rotate 35s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Circle7 = styled.img`
  position: absolute;
  animation: rotate 45s infinite normal backwards;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
interface ScoreProps {
  kontent: string;
}
export const Score: React.FC<ScoreProps> = ({ kontent }) => {
  return (
    <>
      <Wrapper>
        <Circle1 src={elipse1} />
        <Circle2 src={elipse2} />
        <Circle3 src={elipse3} />
        <Circle4 src={elipse4} />
        <Circle5 src={elipse5} />
        <Circle6 src={elipse6} />
        <Circle7 src={elipse7} />
        <Circle src={elipse9} />
        <ScoreP>{kontent}</ScoreP>
      </Wrapper>
    </>
  );
};
