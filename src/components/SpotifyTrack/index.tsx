import styled from "styled-components";
import { CustomAudioPlayer } from "../AudioPlayer";
import { useDispatch } from "react-redux";
import { updateBg } from "../../store/slice";
import { useEffect } from "react";

const StyledDiv = styled.div`
  padding: 20px;
  width: 34%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
`;
const Artist = styled.a`
  text-decoration: none;
  margin: -5px 0 0 0;
  font-weight: 400;
  font-size: 15px;
  color: #797bec;
  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    margin: 0;
    font-weight: 300;
    font-size: 15px;
  }
`;
const Song = styled.a`
  width: 70%;
  text-decoration: none;
  margin: 15px 0;
  font-weight: 700;
  font-size: 22px;
  color: #797bec;
  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
  }
`;
const StyledImg = styled.img`
  border-radius: 18px;
  width: 280px;
  height: 280px;

  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    border-radius: 12px;
    width: 210px;
    height: 210px;
  }
`;

type SpotifyTrackType = {
  url: string;
  imgUrl: string;
  trackName: string;
  artists: { artistName: string; artistUrl: string }[];
  previewUrl: string;
};

export const SpotifyTrack = ({ track }: { track: SpotifyTrackType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgRadial"));
  }, [dispatch]);

  return (
    <StyledDiv>
      <StyledImg src={track.imgUrl} />
      {track.artists.map((artist: any, index) => (
        <Artist href={artist.artistUrl} key={index} target="_blank">
          {artist.artistName}
        </Artist>
      ))}
      <Song href={track.url} target="_blank">
        {track.trackName}
      </Song>
      <CustomAudioPlayer key={track.previewUrl} src={track.previewUrl} />
    </StyledDiv>
  );
};
