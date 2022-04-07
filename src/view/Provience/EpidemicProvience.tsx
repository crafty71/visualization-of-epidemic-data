/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getchinaProvienceDataAction } from "@/view/Domestic/store/actionCreators";

import NewTrend from "./children/newTrend/NewTrend";
import CumulativeTrend from "./children/cumulativeTrend/CumulativeTrend";

const EpidemicProvience = memo(() => {
  const { chinaProvienceData } = useSelector(
    (defaultState: any) => ({
      chinaProvienceData: defaultState.getIn([
        "demestic",
        "chinaProvienceData",
      ]),
    }),
    shallowEqual
  );

  const { provience } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getchinaProvienceDataAction(provience));
  }, [dispatch]);

  return (
    <div style={{ padding: "10px" }}>
      {/* <ImformationShow /> */}
      <NewTrend chinaProvienceData={chinaProvienceData} provience={provience} />
      <CumulativeTrend
        chinaProvienceData={chinaProvienceData}
        provience={provience}
      />
    </div>
  );
});

export default EpidemicProvience;
