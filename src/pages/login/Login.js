import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { login, error, isPending } = useLogin();
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });

  const handleChangeLoginValues = (value, key) => {
    setLoginValues({ ...loginValues, [key]: value });
  };

  const handleSubmit = (e) => {
    const { email, password } = loginValues;
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => handleChangeLoginValues(e.target.value, "email")}
          value={loginValues.email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => handleChangeLoginValues(e.target.value, "password")}
          value={loginValues.password}
        />
      </label>
      {!isPending && <button className="btn">Log in</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
