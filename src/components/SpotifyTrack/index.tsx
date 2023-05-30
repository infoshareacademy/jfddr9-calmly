import styled from "styled-components";
import { CustomAudioPlayer } from "../AudioPlayer";
// import { useDispatch } from 'react-redux';
// import { updateBg } from '../../store/slice';
// import { useEffect } from 'react';

const StyledDiv = styled.div`
  padding: 20px;
  width: 44%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 25px;

  @media (max-width: 810px) {
    width: auto;
    flex-direction: row;
    margin: 10px 0;
  }
  @media (max-width: 575px) {
    padding: 5px;
    flex-direction: row;
    width: 350px;
  }
`;

const StyledMiddleDiv = styled.div`
  width: 100%;
  @media (max-width: 810px) {
    margin: 10px 10px;
    width: 400px;
  }
  @media (max-width: 575px) {
    width: 300px;
  }
`;

const StyledBottomDiv = styled.div`
  height: 150px;
  padding: 10px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 810px) {
    width: auto;
    flex-direction: row;
    height: 10px;
  }
  @media (max-width: 575px) {
    flex-direction: row;
    padding: 0;
  }
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
  @media (max-width: 575px) {
    font-size: 10px;
  }
`;
const Song = styled.a`
  width: 70%;
  text-decoration: none;
  margin: 15px 0;
  font-weight: 700;
  font-size: 22px;
  color: #797bec;
  text-overflow: ellipsis;
  @media only screen and (min-width: 500px) and (max-width: 1580px) {
    margin: 0;
    font-weight: 700;
    font-size: 17px;
  }
  @media (max-width: 575px) {
    font-size: 10px;
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
  @media (max-width: 810px) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: 575px) {
    width: 50px;
    height: 50px;
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
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateBg("bgRadial"));
  // }, [dispatch]);

  return (
    <StyledDiv>
      <StyledImg src={track.imgUrl} />
      <StyledMiddleDiv>
        <StyledBottomDiv>
          {track.artists.slice(0, 2).map((artist: any, index) => (
            <Artist href={artist.artistUrl} key={index} target="_blank">
              {artist.artistName}
            </Artist>
          ))}
          <Song href={track.url} target="_blank">
            {track.trackName}
          </Song>
        </StyledBottomDiv>
        <CustomAudioPlayer key={track.previewUrl} src={track.previewUrl} />
      </StyledMiddleDiv>
    </StyledDiv>
  );
};
