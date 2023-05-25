import { useState } from "react";
import styled from "styled-components";
import sound from "../../assets/Sound.svg";

const AudioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50px;
  padding: 6px;
  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    padding: 3px;
  }
`;

const PlayButton = styled.button`
  background-color: white;
  color: #797bec;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ProgressSlider = styled.input`
  width: 100%;
  height: 10px;
  margin-left: 10px;
  background: white;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background: #b3b4ef;
    border: none;
    height: 3px;
  }

  &::-moz-range-track {
    background: #797bec;
    border: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background-color: #797bec;
    border-radius: 50%;
    margin-top: -4px;
  }
  &::-moz-range-progress {
    height: 3px;
    color: #797bec;
  }

  &::-webkit-progress-value {
    heigth: 3px;
    color: #797bec;
  }
`;

const VolumeIcon = styled.img`
  height: 24px;
  margin-right: 8px;
`;

const VolumeSlider = styled.input`
  width: 70px;
  height: 10px;
  background: white;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    background: #b3b4ef;
    border: none;
    height: 3px;
  }

  &::-moz-range-track {
    background: #797bec;
    border: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background-color: #797bec;
    border-radius: 50%;
    margin-top: -4px;
  }
`;
type CustomAudioPlayerProps = {
  src: string | undefined;
};
export const CustomAudioPlayer = ({ src }: CustomAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const [showVolume, setShowVolume] = useState(false);

  const togglePlay = (event: any) => {
    const audio = event.target.parentNode.querySelector("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (event: any) => {
    setCurrentTime(event.target.currentTime);
  };

  const handleDurationChange = (event: any) => {
    setDuration(event.target.duration);
  };

  const handleProgressChange = (event: any) => {
    const newTime = event.target.value;
    event.target.parentNode.querySelector("audio").currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (event: any) => {
    const newVolume = event.target.value;
    event.target.parentNode.querySelector("audio").volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <AudioContainer>
        <PlayButton onClick={togglePlay}>{isPlaying ? "❚❚" : "▶"}</PlayButton>

        <audio
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
        />
        <span style={{ color: "#797bec" }}>{formatTime(currentTime)}</span>
        <ProgressSlider
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
        />

        <VolumeIcon
          onClick={() => setShowVolume(showVolume ? false : true)}
          src={sound}
          alt="sound"
        />

        {showVolume && (
          <VolumeSlider
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        )}
      </AudioContainer>
    </>
  );
};
