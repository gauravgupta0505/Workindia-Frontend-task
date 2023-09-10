import axios from "axios";

import { getDataApi } from "../utils/constants/api";
import { useState } from "react";

export const useApi = () => {
  const [candidatesData, setCandidatesData] = useState([]);
  const getData = () => {
    axios
      .get(getDataApi())
      .then((res) => {
        const data = res.data;
        console.log(data);
        setCandidatesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { candidatesData, getData };
};
