import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="page">
        <div className="card">
          <p>No profile data found</p>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Candidate Profile</h2>

        <p><b>Role:</b> {data.role}</p>
        <p><b>Project:</b> {data.project}</p>
        <p><b>Skills:</b> {data.skills.join(", ")}</p>
        <p><b>Summary:</b> {data.summary}</p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}