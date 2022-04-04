import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getDomesticDataAction } from "./store/actionCreators";

const Domestic = memo(() => {
  const dispatch = useDispatch();
  // hocks
  useEffect(() => {
    dispatch();
  });
  return <div>国内疫情</div>;
});

export default Domestic;
