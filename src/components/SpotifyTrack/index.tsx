import styled from "styled-components";
import { CustomAudioPlayer } from "../AudioPlayer";

const StyledDiv = styled.div`
  padding: 30px;
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 15px 25px 25px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
`;

type SpotifyTrackType = {
  url: string;
  imgUrl: string;
  trackName: string;
  artists: { artistName: string; artistUrl: string }[];
  previewUrl: string;
};

export const SpotifyTrack = ({ track }: { track: SpotifyTrackType }) => {
  return (
    <StyledDiv>
      <img
        src={track.imgUrl}
        style={{ borderRadius: "18px" }}
        width={250}
        height={250}
      />
      {track.artists.map((artist: any, index) => (
        <a href={artist.artistUrl} key={index} target="_blank">
          {artist.artistName}
        </a>
      ))}
      <a href={track.url} target="_blank">
        {track.trackName}
      </a>
      <CustomAudioPlayer key={track.previewUrl} src={track.previewUrl} />
    </StyledDiv>
  );
};
