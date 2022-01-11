import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { signOut, getUser } from './services/users';

import './App.css';
import background from './moon.jpg';
import Footer from './components/Footer/Footer';
import Auth from './views/Auth/Auth';
import UserView from './components/UserView/UserView';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <UserView signOutUser={signOutUser} currentUser={currentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />}
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
