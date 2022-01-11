import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import background from './moon.jpg';
import Footer from './components/Footer/Footer';
import Auth from './views/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1>this is the home page</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
