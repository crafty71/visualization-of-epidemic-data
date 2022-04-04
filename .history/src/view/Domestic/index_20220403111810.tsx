import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { defaultState } from "./store/store";
// api
import { getDomesticDataAction } from "./store/actionCreators";
import { getIn } from "immutable";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  const dispatch = useDispatch();

  //redux
  const { demesticData } = useSelector(
    (state) => ({
      demesticData: state.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );
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
