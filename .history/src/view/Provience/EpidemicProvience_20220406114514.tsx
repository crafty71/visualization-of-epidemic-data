/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getchinaProvienceDataAction } from "@/view/Domestic/store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const EpidemicProvience = memo((props) => {
  const { provience } = useParams();
  console.log(provience);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getchinaProvienceDataAction(provience));
  });

  return <div>EpidemicProvience</div>;
});

export default EpidemicProvience;
