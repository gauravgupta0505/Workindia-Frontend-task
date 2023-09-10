import React from "react";
import bullet from "../assets/bullet.png";
import "../App.css";

function CandidateCard({
  name = "",
  lastUpdated = "",
  location = "",
  gender = "",
  handleChange,
  applied = false,
}) {
  return (
    <div className="candidate-card">
      <div className="candidate-details">
        <p className="heading">{name}</p>
        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{lastUpdated}</p>
        </div>
        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{location}</p>
        </div>
        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{gender}</p>
        </div>
        <div>{applied && <button onClick={handleChange}>Accept</button>}</div>
      </div>
    </div>
  );
}

export default CandidateCard;
