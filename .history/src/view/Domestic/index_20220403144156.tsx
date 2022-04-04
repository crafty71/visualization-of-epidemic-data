import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { defaultState } from "./store/store";
// api
import { getDomesticDataAction } from "./store/actionCreators";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";

const Domestic = memo(() => {
  //redux
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDomesticDataAction());
  }, [dispatch]);

  // deal data
  const { diseaseh5Shelf, statisGradeCityDetail } = demesticData;

  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics diseaseh5Shelf={...diseaseh5Shelf} />
    </div>
  );
});

export default Domestic;
