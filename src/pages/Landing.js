import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content">
        <h1>AI Recruiter</h1>
        <p>Build your profile with AI</p>

        <button onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>
    </div>
  );
}