// import logo from './logo.svg';

// syntax for images and other assets: import { ReactComponent as [chosenName] } from "./pathInFolder"
import { ReactComponent as Logo } from "./logo.svg"
import './App.css';
import ListenData from './components/ListenData';

function App() {
  const CLIENT_ID = "db1fb6a46e4b4173b335eba99b582a6c";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // OAuth 2.0 framework - Implicit Grant Flow

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" style={{ height: 170 }}/>
        <h1>Streams for Spotify</h1>
        <p className="login-text">Log in to view your comprehensive listening data.</p>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Log in to Spotify</a>
      </header>
    </div>
  );
}

// <img src="/logo.svg" className="App-logo" alt="logo" />

export default App;
