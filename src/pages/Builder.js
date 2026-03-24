import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Builder() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    let data = {};

    if (input.toLowerCase().includes("website")) {
      data = {
        role: "Frontend Developer",
        project: "Website Project",
        skills: ["HTML", "CSS", "JavaScript"],
        summary: "Built responsive websites using modern web technologies."
      };
    } else if (input.toLowerCase().includes("app")) {
      data = {
        role: "App Developer",
        project: "Mobile App",
        skills: ["React Native", "API", "UI Design"],
        summary: "Developed mobile apps with user-friendly interfaces."
      };
    } else {
      data = {
        role: "Developer",
        project: input,
        skills: ["Problem Solving"],
        summary: "Passionate developer eager to learn."
      };
    }

    setResponse(data);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>AI Profile Builder</h2>

        <input
          type="text"
          placeholder="Tell me about your experience..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Generate</button>

        {response && (
          <div className="output">
            <h3>AI Generated</h3>
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