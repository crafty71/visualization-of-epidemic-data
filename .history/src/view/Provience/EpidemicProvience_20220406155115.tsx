/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getchinaProvienceDataAction } from "@/view/Domestic/store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import NewTrend from "./children/newTrend/NewTrend";

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
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>
        `本土疫情新增趋势`
      </h4>
      <NewTrend chinaProvienceData={chinaProvienceData} />
    </div>
  );
});

export default EpidemicProvience;
