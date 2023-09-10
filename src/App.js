import React, { useState, useEffect } from "react";
import "./App.css";
import { useApi } from "./hooks";

import CandidatesColumn from "./components/CandidatesColumn";
function App() {
  const { candidatesData, getData } = useApi();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData().then((res) => {
      setLoading(false)
    });
    // console.log(candidatesData);
  }, []);
  console.log(loading);

  return (
    <div className="App">
      {loading && <h1>loading...</h1>}
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
