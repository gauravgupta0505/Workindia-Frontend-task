import React from "react";
import CandidateCard from "./CandidateCard";
import { STATUS_APPLIED } from "../utils/roles";

function CandidatesColumn({ title, status, candidates, onChange }) {
  
  const filteredCandidates = candidates?.filter(
    (candidate) => candidate.status === status
  );

  const handleChange = (candidate) => {
    const newCandidate = {...candidate, status: "Accepted"}
    console.log(newCandidate)
    onChange(newCandidate);
  }
  return (
    <div className="candidates-column">
      <h2>{title}</h2>
      {filteredCandidates?.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          name = {candidate?.name}
          lastUpdated = {candidate?.last_updated_at}
          location = {candidate?.location}
          gender = {candidate.gender}
          handleChange={() => handleChange(candidate)}
          applied = {status === STATUS_APPLIED}
        />
      ))}
    </div>
  );
}

export default CandidatesColumn;
