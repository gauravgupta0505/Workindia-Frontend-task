import axios from "axios";

import { getDataApi } from "../utils/constants/api";
import { useState } from "react";

export const useApi = () => {
  const [candidatesData, setCandidatesData] = useState([]);
  const getData = async () => {
    await axios
      .get(getDataApi())
      .then((res) => {
        const data = res.data.data;
      
        setCandidatesData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return { candidatesData, getData };
};
