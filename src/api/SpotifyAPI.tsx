import { useEffect, useState } from "react";

import { SpotifyTrack } from "../components/SpotifyTrack";
import { LoaderComponent } from "../components/Loader";

const client_id = "18d4de0e32314d02b42308e9357cbb2e"; // client id
const client_secret = "b286a9f61c344b79b96eaee2c58c3b68"; // secret

let token = "";

export const SpotifyAPI = () => {
  const [tracks, setTracks] = useState([]);
  const [list, setList] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
        console.log(response.items);
        let tracksArray = response.items.map((track: any) => {
          return {
            url: track.track.external_urls.spotify,
            imgUrl: track.track.album.images[1].url,
            trackName: track.track.name,
            previewUrl: track.track.preview_url,
          };
        });
        console.log(tracksArray);
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
          <SpotifyTrack track={tracks[list]} />
          <SpotifyTrack track={tracks[list + 1]} />
          <SpotifyTrack track={tracks[list + 2]} />
          <button onClick={() => setList(list + 3)}>Load Next 3 Songs</button>
        </>
      )}
    </>
  );
};
