import { signOut } from '../../services/users';
import { useState } from 'react';
import Header from '../../components/Header/Header';

export default function HeaderView({ currentUser, setCurrentUser, type, setType }) {
  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };
  return (
    <div>
      <Header type={type} setType={setType} currentUser={currentUser} signOutUser={signOutUser} />
    </div>
  );
}
