import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
// api
import { getDomesticDataAction } from "./store/actionCreators";

// components

import EpidemicStatistics from "./children/EpidemicStatistics";

const Domestic = memo(() => {
  const dispatch = useDispatch();
  // hocks
  useEffect(() => {
    dispatch(getDomesticDataAction());
  });
  return (
    <div>
      <EpidemicStatistics />
    </div>
  );
});

export default Domestic;
