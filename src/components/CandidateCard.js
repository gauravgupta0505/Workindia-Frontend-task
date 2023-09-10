import React from "react";
import bullet from "../assets/bullet.png";
import "../App.css";
function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card">
      <div className="candidate-details">
        <p className="heading">{candidate.name}</p>

        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{candidate.last_updated_at}</p>
        </div>
        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{candidate.location}</p>
        </div>
        <div className="flex">
          <img src={bullet} alt="Bullet Point" width="18" height="18" />
          <p style={{ margin: "5px" }}>{candidate.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
