import { useEffect, useState } from "react";
import styled from "styled-components";

import { SpotifyTrack } from "../components/SpotifyTrack";
import { LoaderComponent } from "../components/Loader";
import { useDispatch } from "react-redux";
import { updateBg } from "../store/slice";

const client_id = "18d4de0e32314d02b42308e9357cbb2e"; // client id
const client_secret = "b286a9f61c344b79b96eaee2c58c3b68"; // secret

let token = "";

const StyledTracksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;

  @media (max-width: 810px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const StyledButtonText = styled.span`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #797bec;
`;

const StyledLoadButton = styled.button`
  cursor: pointer;
  width: 217px;
  height: 41px;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 50px;
  border: none;
  margin-top: 70px;
  &:hover {
    background: white;
    transition: 0.2s;
  }

  @media (max-width: 810px) {
    margin-top: 30px;
  }
`;

export const SpotifyAPI = () => {
  const [tracks, setTracks] = useState([]);
  const [list, setList] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgRadial"));
  }, [dispatch]);

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        token = data.access_token;
        getRandomTracks(token);
      })
      .catch((error) => console.error(error));
  }, []);

  const shuffleArray = (arr: []) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getRandomTracks = (accessToken: string) => {
    const randomOffset = Math.floor(Math.random() * 301);
    fetch(
      `
      https://api.spotify.com/v1/playlists/2RLZUbbjd13JFFPjsFkIfj/tracks?offset=${randomOffset}&limit=100&locale=pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7&access_token=` +
        accessToken
    )
      .then((response) => response.json())
      .then((response) => {
        let tracksArray = response.items.map((track: any) => {
          return {
            url: track.track.external_urls.spotify,
            imgUrl: track.track.album.images[1].url,
            trackName: track.track.name,
            artists: track.track.artists.map((artist: any) => {
              return {
                artistName: artist.name,
                artistUrl: artist.external_urls.spotify,
              };
            }),
            previewUrl: track.track.preview_url,
          };
        });

        tracksArray = shuffleArray(tracksArray);
        setTracks(tracksArray);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  if (list > 90) {
    setTracks([]);
    setList(0);
    setIsLoading(true);
    getRandomTracks(token);
  }

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <StyledTracksContainer>
            <SpotifyTrack track={tracks[list]} />
            <SpotifyTrack track={tracks[list + 1]} />
            <SpotifyTrack track={tracks[list + 2]} />
          </StyledTracksContainer>
          <StyledLoadButton onClick={() => setList(list + 3)}>
            <StyledButtonText>new songs</StyledButtonText>
          </StyledLoadButton>
        </>
      )}
    </>
  );
};
