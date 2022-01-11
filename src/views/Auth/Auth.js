import { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Auth({ currentUser, setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(response);
    } catch {
      setErrorMessage(
        'Something went wrong. Please make sure all feilds are filled out correctly.'
      );
    }
  };

  return (
    <>
      <Header />
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </>
  );
}
