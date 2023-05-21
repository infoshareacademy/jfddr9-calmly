import styled from "styled-components";
import { CustomAudioPlayer } from "../AudioPlayer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBg } from "../../store/slice";

import soundRain from "../../assets/natureSounds/Rain.mp3";
import imgRain from "../../assets/natureIcons/Rain.svg";
import soundBirds from "../../assets/natureSounds/Birds.mp3";
import imgBirds from "../../assets/natureIcons/Birds.svg";
import soundFire from "../../assets/natureSounds/Fire.mp3";
import imgFire from "../../assets/natureIcons/Fire.svg";
import soundWaves from "../../assets/natureSounds/Waves.mp3";
import imgWaves from "../../assets/natureIcons/Waves.svg";
import soundWind from "../../assets/natureSounds/Wind.mp3";
import imgWind from "../../assets/natureIcons/Wind.svg";
import soundRiver from "../../assets/natureSounds/River.mp3";
import imgRiver from "../../assets/natureIcons/River.svg";

const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  position: relative;
  transition: 0.2s linear;
  width: 175px;
  height: 355px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 8px 15px 25px rgba(0, 0, 0, 0.25);
  border-radius: 150px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 10px;

  &:active {
    transform: scale(0.9);
  }
`;

const Circle = styled.span<{ isActive: boolean }>`
  position: absolute;
  bottom: 50%;
  width: 88%;
  height: 155px;

  border-radius: 100%;
  background-color: ${(props) => (props.isActive ? "#797BEC" : "#B3B4EF")};
  box-shadow: inset 5px 5px 12px rgba(0, 0, 0, 0.25);

  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.isActive ? "100%" : "0")});

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.img`
  // width: 100px;
  // height: 100px;
  width: 70%;
  height: 6rem;
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

interface Item {
  id: number;
  isActive: boolean;
  imgSource: string;
  soundSource: string;
}

export const NatureSound = () => {
  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [items, setItems] = useState<Array<Item>>([
    { id: 1, isActive: false, imgSource: imgRain, soundSource: soundRain },
    { id: 2, isActive: false, imgSource: imgBirds, soundSource: soundBirds },
    { id: 3, isActive: false, imgSource: imgFire, soundSource: soundFire },
    { id: 4, isActive: false, imgSource: imgWaves, soundSource: soundWaves },
    { id: 5, isActive: false, imgSource: imgWind, soundSource: soundWind },
    { id: 6, isActive: false, imgSource: imgRiver, soundSource: soundRiver },
  ]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBg("bgViolet"));
  }, [dispatch]);

  const toggleClick = (id: number, soundSource: string) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        let newActive = !item.isActive;
        let newSoundSource = newActive ? soundSource : null;
        let newIsVisible = newActive ? true : false;
        setCurrentSound(newSoundSource);
        setIsVisible(newIsVisible);
        console.log(isVisible);
        return { ...item, isActive: newActive };
      } else {
        return { ...item, isActive: false };
      }
    });

    setItems(updatedItems);
    // setIsVisible(!isVisible)
  };

  return (
    <>
      <ToggleButtonContainer>
        {items.map((item) => (
          <ToggleButton
            key={item.id}
            isActive={item.isActive}
            onClick={() => toggleClick(item.id, item.soundSource)}
          >
            <Circle isActive={item.isActive}>
              <InnerCircle src={item.imgSource} />
            </Circle>
          </ToggleButton>
        ))}
      </ToggleButtonContainer>
      {isVisible ? (
        <PlayerWrapper style={{ visibility: "visible" }}>
          <CustomAudioPlayer
            key={currentSound}
            src={currentSound}
          ></CustomAudioPlayer>{" "}
        </PlayerWrapper>
      ) : (
        <PlayerWrapper style={{ visibility: "hidden" }}>
          <CustomAudioPlayer
            key={currentSound}
            src={currentSound}
          ></CustomAudioPlayer>
        </PlayerWrapper>
      )}
    </>
  );
};
