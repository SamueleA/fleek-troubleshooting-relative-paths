import squirrel from './squirrel.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Use relative paths so assets can load from IPFS gateways!</p>
        <img src={squirrel} alt="squirrel" className="squirrel" />
      </header>
    </div>
  );
}

export default App;
