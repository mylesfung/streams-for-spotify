// syntax for images and other assets: 
// import { ReactComponent as [chosenName] } from "./pathInFolder"
import { ReactComponent as Logo } from "./logo.svg"
import './App.css';
import ListenData from './components/ListenData';
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

  // Get Top Artists Function (currently search artists function)

  // store search term [string]
  const [searchKey, setSearchKey] = useState("");
  // store artists [array]
  const [artists, setArtists] = useState([]);

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    });
    setArtists(data.artists.items);
  }

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={artist.id}>
        {artist.images.length ? <img width={"65%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
        {artist.name}
      </div>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" style={{ height: 170 }}/>

        <h1>Streams for Spotify</h1>
        <p className="login-text">View your comprehensive music streaming stats.</p>       
        <a className="login-text" 
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Log in to Spotify</a>

        <br></br>
        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}></input>
          <button type={"submit"}>Search Artists</button>
        </form>

        {renderArtists()}
      </header>
    </div>
  );
}

export default App;
