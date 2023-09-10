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
  const { candidatesData, getData } = useApi();

  useEffect(() => {
    getData().then(() => {
      setLoading(false);
    });
  }, [getData]);

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
            />
          </div>
          <div className="column">
            <CandidatesColumn
              title="Accepted"
              status={STATUS_ACCEPTED}
              candidates={candidatesData}
            />
          </div>
          <div className="column">
            <CandidatesColumn
              title="Rejected"
              status={STATUS_REJECTED}
              candidates={candidatesData}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
