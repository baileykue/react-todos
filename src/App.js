import './App.css';
import background from './moon.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1>this is the home page</h1>
    </div>
  );
}

export default App;
