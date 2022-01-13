import './Header.css';
import classNames from 'classnames';

export default function Header({ type, setType, currentUser, signOutUser }) {
  return (
    <>
      {currentUser && (
        <div className="nav">
          <button onClick={signOutUser}>Log Out</button>
        </div>
      )}

      {!currentUser && (
        <>
          <div className="nav">
            <h4
              onClick={() => {
                setType('signin');
              }}
              className={classNames({ active: type === 'signin' })}
            >
              Sign In
            </h4>
            <h4
              onClick={() => {
                setType('signup');
              }}
              className={classNames({ active: type === 'signup' })}
            >
              Sign Up
            </h4>
          </div>
        </>
      )}
    </>
  );
}
