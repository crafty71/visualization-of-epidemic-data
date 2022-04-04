import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
// import { defaultState } from "./store/store";
// api
import { getDomesticDataAction } from "./store/actionCreators";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  //redux
  const { demesticData } = useSelector(
    (defaultState: any) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  console.log(demesticData);

  // hocks
  const dispatch = useDispatch();
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
