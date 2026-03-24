import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      email === "hire-me@anshumat.org" &&
      password === "HireMe@2025!"
    ) {
      setError("");
      navigate("/builder");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}