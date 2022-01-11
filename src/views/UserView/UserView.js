import Header from '../Header/Header';
import './UserView.css';

export default function UserView({ signOutUser, currentUser }) {
  console.log(currentUser);
  return (
    <div className="user-view">
      <Header signOutUser={signOutUser} currentUser={currentUser} />
      <h2>Welcome User! We are happy you are here.</h2>
    </div>
  );
}
