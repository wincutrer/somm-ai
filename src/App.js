import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuItem, setMenuItem] = useState("");
  const [wineList, setWineList] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement the function to fetch pairings from your backend
  };
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>SommAI</h1>
      <p>Your personal sommelier</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Menu Item:
            <input
              type="text"
              value={menuItem}
              onChange={(e) => setMenuItem(e.target.value)}
              placeholder="e.g. Grilled Salmon"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Wine List:
            <textarea
              value={wineList}
              onChange={(e) => setWineList(e.target.value)}
              placeholder="e.g. Pinot Noir, Chardonnay, Riesling"
              style={{
                display: "block",
                marginTop: "5px",
                width: "300px",
                height: "100px",
              }}
            />
          </label>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Find Pairings
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h2>Recommendations</h2>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
