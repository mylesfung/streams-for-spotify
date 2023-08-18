// import logo from './logo.svg';

// syntax: import { ReactComponent as [name] } from "./pathInFolder"
import { ReactComponent as Logo } from "./logo.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" alt="logo" style={{ height: 300 }}/>
        <Logo className="App-logo" alt="logo" style={{ height: 150 }}/>
        <h1>confidence is comical</h1>

      </header>
    </div>
  );
}

// <img src="/logo.svg" className="App-logo" alt="logo" />

export default App;
