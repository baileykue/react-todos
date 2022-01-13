import './AuthForm.css';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMessage,
}) {
  return (
    <form className="form">
      <span>{errorMessage}</span>

      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
