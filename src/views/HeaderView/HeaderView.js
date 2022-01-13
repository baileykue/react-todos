import { signOut } from '../../services/users';
import Header from '../../components/Header/Header';
import './HeaderView.css';

export default function HeaderView({ currentUser, setCurrentUser, type, setType }) {
  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };
  return (
    <div className="header-view">
      <Header type={type} setType={setType} currentUser={currentUser} signOutUser={signOutUser} />
    </div>
  );
}
