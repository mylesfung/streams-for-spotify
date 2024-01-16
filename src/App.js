// syntax for images and other assets: 
// import { ReactComponent as [chosenName] } from "./pathInFolder"
import { ReactComponent as Logo } from "./logo.svg"
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const CLIENT_ID = "db1fb6a46e4b4173b335eba99b582a6c";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // OAuth 2.0 Authentication - Implicit Grant Flow
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      // extracting token from hash
      token = hash.substring(1).split("&").find(x => x.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  })

  // Logout
  const logout = () => {
    window.localStorage.removeItem("token");
    setToken("");
  }

  // Top Five Artists
  const [artists, setArtists] = useState([]);

  const getTopFiveArtists = async () => {
    console.log("Token: ", token);
    const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        type: "artists",
        time_range: "short_term",
        limit: "5",
        offset: "0"
      }
    });
    console.log(response.items);
    setArtists(response.items);

    //console.log(artists);
    return artists.map(artist => (
      <div key={artist.id}>
        {artist.name}
        {artist.images[1]}
      </div>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" style={{ height: 170 }}/>

        <h1>Streams for Spotify</h1>
        <p className="login-text">View your music streaming stats.</p>       
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Log in to Spotify</a>

        <br></br>
          <button onClick={getTopFiveArtists}>
            Show Top Five Artists</button>
      </header>
    </div>
  );
}

export default App;
