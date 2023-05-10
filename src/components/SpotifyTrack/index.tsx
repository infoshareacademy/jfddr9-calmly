import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: orange;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

type SpotifyTrackType = {
  url: string;
  imgUrl: string;
  trackName: string;
  previewUrl: string;
};

export const SpotifyTrack = ({ track }: { track: SpotifyTrackType }) => {
  return (
    <StyledDiv>
      <img src={track.imgUrl} width={100} height={100} />
      <a href={track.url} target="_blank">
        {track.trackName}
      </a>
      <audio key={track.trackName} style={{ marginLeft: "auto" }} controls>
        <source src={track.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </StyledDiv>
  );
};
