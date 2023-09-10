import React, { useState, useEffect } from "react";
import "./App.css";
import { useApi } from "./hooks";
import {
  STATUS_APPLIED,
  STATUS_ACCEPTED,
  STATUS_REJECTED,
} from "./utils/roles";
import CandidatesColumn from "./components/CandidatesColumn";

function App() {
  const [loading, setLoading] = useState(true);
  const { candidatesData, getData, setCandidatesData } = useApi();

  useEffect(() => {
    getData().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("Updated");
  }, [candidatesData]);

  const onChange = (changed) => {
    const newCandidate = [...candidatesData];
    for (var i = 0; i < newCandidate.length; i++) {
      if (newCandidate[i].id === changed.id) {
        console.log("changed");
        newCandidate[i] = changed;
        console.log(newCandidate[i]);
      }
    }

    setCandidatesData(newCandidate);
    console.log(candidatesData);
  };
  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <div className="column">
            <CandidatesColumn
              title="Applied"
              status={STATUS_APPLIED}
              candidates={candidatesData}
              onChange={onChange}
              
            />
          </div>
          <div className="column">
            <CandidatesColumn
              title="Accepted"
              status={STATUS_ACCEPTED}
              candidates={candidatesData}
              onChange={() => {}}
            />
          </div>
          <div className="column">
            <CandidatesColumn
              title="Rejected"
              status={STATUS_REJECTED}
              candidates={candidatesData}
              onChange={() => {}}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
