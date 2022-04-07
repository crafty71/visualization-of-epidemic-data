import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getchinaProvienceDataAction } from "@/view/Domestic/store/actionCreators";
import { useDispatch } from "react-redux";

const EpidemicProvience = memo((props) => {
  const { provience } = useParams();
  console.log(provience);

  const dispatch = useDispatch();

  useEffect(() => {
    getchinaProvienceDataAction(provience);
  });

  return <div>EpidemicProvience</div>;
});

export default EpidemicProvience;
