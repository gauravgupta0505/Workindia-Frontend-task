import React from "react";
import CandidateCard from "./CandidateCard";
function CandidatesColumn({ title, status, candidates }) {
  //     const filteredCandidates = candidates?.filter(
  //     (candidate) => candidate.status === status
  //   );
  console.log(candidates);

  return (
    <div className="candidates-column">
      <h2>{title}</h2>
      {/* {filteredCandidates?.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))} */}
    </div>
  );
}

export default CandidatesColumn;
