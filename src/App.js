import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';

import './App.css';
import background from './moon.jpg';
import Footer from './components/Footer/Footer';
import Auth from './views/Auth/Auth';
import UserView from './views/UserView/UserView';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && <UserView currentUser={currentUser} setCurrentUser={setCurrentUser} />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />}
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
