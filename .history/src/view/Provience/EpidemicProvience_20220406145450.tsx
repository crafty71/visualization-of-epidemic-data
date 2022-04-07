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
  console.log(chinaProvienceData.length);

  const { provience } = useParams();
  console.log(provience);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getchinaProvienceDataAction(provience));
  }, [dispatch]);

  return (
    <div>
      <NewTrend chinaProvienceData={chinaProvienceData} />
    </div>
  );
});

export default EpidemicProvience;
