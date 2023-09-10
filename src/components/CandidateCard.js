import React from "react";

function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card">
      <div className="bullet-point">
        <img
          src="bullet-point-image.png"
          alt="Bullet Point"
          width="18"
          height="18"
        />
      </div>
      <div className="candidate-details">
        <p>{candidate.name}</p>
        <p>Last Updated: {candidate.last_updated_at}</p>
        <p>Location: {candidate.location}</p>
        <p>Gender: {candidate.gender}</p>
      </div>
    </div>
  );
}

export default CandidateCard;
