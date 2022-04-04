import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { defaultState } from "./store/store";
// api
import { getDomesticDataAction } from "./store/actionCreators";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  const dispatch = useDispatch();

  //redux
  const { demesticData } = useSelector((state: defaultState) => ({
    demesticData: state.getIn(["demestic", "demesticData"]),
  }));

  console.log(demesticData);

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
