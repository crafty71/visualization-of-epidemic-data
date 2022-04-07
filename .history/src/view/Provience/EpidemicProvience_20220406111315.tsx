import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getchinaProvienceDataAction } from "@/view/Domestic/store/actionCreators";

const EpidemicProvience = memo((props) => {
  const { provience } = useParams();
  console.log(provience);

  useEffect(()=>{
    getchinaProvienceDataAction(provience)
  ,[dispatch])

  return <div>EpidemicProvience</div>;
});

export default EpidemicProvience;
