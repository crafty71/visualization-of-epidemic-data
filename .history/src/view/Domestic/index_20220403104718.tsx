import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
// api
import { getDomesticDataAction } from "./store/actionCreators";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  const dispatch = useDispatch();

  //redux
  const { demesticData } = useSelector(
    demesticData : state.getIn(["demestic", "demesticData"])
  )
    // hocks
    useEffect(() => {
      dispatch(getDomesticDataAction());
    }, [dispatch]);
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
    </div>
  );
});

export default Domestic;
