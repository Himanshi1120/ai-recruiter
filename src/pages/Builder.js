import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Builder() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!input.trim()) {
      setError("Please enter your experience first");
      setResponse(null);
      return;
    }

    setError("");

    const words = input.split(" ");

    const skills = words
      .filter(word => word.length > 3)
      .slice(0, 5);

    const data = {
      role: input.toLowerCase().includes("react")
        ? "Frontend Developer"
        : "Developer",
      project: input,
      skills: skills,
      summary: input
    };

    setResponse(data);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>AI Profile Builder</h2>

        <input
          type="text"
          placeholder="Describe your experience..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSubmit}>Generate</button>

        {response && (
          <div className="output">
            <h3>Generated Profile</h3>
            <p><b>Role:</b> {response.role}</p>
            <p><b>Project:</b> {response.project}</p>
            <p><b>Skills:</b> {response.skills.join(", ")}</p>
            <p><b>Summary:</b> {response.summary}</p>

            <button onClick={() => navigate("/profile", { state: response })}>
              Save Profile
            </button>

            <button onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}