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

  // OAuth 2.0 framework

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" style={{ height: 150 }}/>
        <h1>Listenometer</h1>
        <p className="Enthusiastic-text">Login to view your listening data!</p>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Login to Spotify</a>
      </header>
    </div>
  );
}

// <img src="/logo.svg" className="App-logo" alt="logo" />

export default App;
