import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from './services/users';

import './App.css';
import background from './rocks.jpg';
import Footer from './components/Footer/Footer';
import Auth from './views/Auth/Auth';
import UserView from './views/UserView/UserView';
import HeaderView from './views/HeaderView/HeaderView';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const [type, setType] = useState('signin');

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HeaderView
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              type={type}
              setType={setType}
            />
            {currentUser && <UserView />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} type={type} />}
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
