import React, { useState, useEffect } from "react";
import "./App.css";
import { useApi } from "./hooks";

import CandidatesColumn from "./components/CandidatesColumn";
function App() {
  const { candidatesData, getData } = useApi();

  useEffect(() => {
    getData();
    console.log(candidatesData);
  }, []);
  // const candidatesData = [
  //   {
  //     id: 1,
  //     name: "Candidate 1",
  //     last_updated_at: "10 minutes ago",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Applied",
  //   },
  //   {
  //     id: 2,
  //     name: "Candidate 2",
  //     last_updated_at: "15 minutes ago",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Applied",
  //   },
  //   {
  //     id: 3,
  //     name: "Candidate 3",
  //     last_updated_at: "2022/05/04",
  //     location: "Koramangala",
  //     gender: "Female",
  //     status: "Accepted",
  //   },
  //   {
  //     id: 4,
  //     name: "Candidate 4",
  //     last_updated_at: "2022/04/10",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Rejected",
  //   },
  //   {
  //     id: 5,
  //     name: "Candidate 5",
  //     last_updated_at: "12 minutes ago",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Accepted",
  //   },
  //   {
  //     id: 6,
  //     name: "Candidate 6",
  //     last_updated_at: "30 minutes ago",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Accepted",
  //   },
  //   {
  //     id: 7,
  //     name: "Candidate 7",
  //     last_updated_at: "2 minutes ago",
  //     location: "HSR Layout",
  //     gender: "Male",
  //     status: "Rejected",
  //   },
  // ];
  return (
    <div className="App">
      <div className="column">
        <CandidatesColumn
          title="Applied"
          status="Applied"
          candidates={candidatesData}
        />
      </div>
      <div className="column">
        <CandidatesColumn
          title="Accepted"
          status="Accepted"
          candidates={candidatesData}
        />
      </div>
      <div className="column">
        <CandidatesColumn
          title="Rejected"
          status="Rejected"
          candidates={candidatesData}
        />
      </div>
    </div>
  );
}

export default App;
