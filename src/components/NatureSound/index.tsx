import styled from "styled-components";
import { CustomAudioPlayer } from "../AudioPlayer";
import { useState } from "react";

import soundRain from "../../assets/natureSounds/Rain.mp3";
import imgRain from "../../assets/natureIcons/Rain.svg";
import soundBirds from "../../assets/natureSounds/Birds.mp3";
import imgBirds from "../../assets/natureIcons/Birds.svg";
import soundFire from "../../assets/natureSounds/Fire.mp3";
import imgFire from "../../assets/natureIcons/Fire.png";
import soundWaves from "../../assets/natureSounds/Waves.mp3";
import imgWaves from "../../assets/natureIcons/Waves.svg";
import soundWind from "../../assets/natureSounds/Wind.mp3";
import imgWind from "../../assets/natureIcons/Wind.svg";
import soundRiver from "../../assets/natureSounds/River.mp3";
import imgRiver from "../../assets/natureIcons/River.svg";

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px;
  fill: #797bec;
  color: #797bec;
  filter: invert(78%) sepia(62%) saturate(2030%) hue-rotate(78deg)
    brightness(92%) contrast(94%);
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const NatureSound = () => {
  const [currentSound, setCurrentSound] = useState(null);

  // const [audioStatus, setAudioStatus] = useState(false)

  const [items] = useState([
    { imgSource: imgRain, soundSource: soundRain },
    { imgSource: imgBirds, soundSource: soundBirds },
    { imgSource: imgFire, soundSource: soundFire },
    { imgSource: imgWaves, soundSource: soundWaves },
    { imgSource: imgWind, soundSource: soundWind },
    { imgSource: imgRiver, soundSource: soundRiver },
  ]);

  const handleClick = (soundSource: any) => {
    setCurrentSound(soundSource);
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <Icon
            src={item.imgSource}
            onClick={() => handleClick(item.soundSource)}
          />
        ))}
      </div>
      <PlayerWrapper>
        {currentSound ? (
          <CustomAudioPlayer
            key={currentSound}
            src={currentSound}
          ></CustomAudioPlayer>
        ) : null}
      </PlayerWrapper>
    </>
  );
};
