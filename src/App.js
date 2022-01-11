import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import background from './moon.jpg';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1>this is the home page</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
