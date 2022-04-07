import React, { memo } from "react";
import { useParams } from "react-router-dom";

const EpidemicProvience = memo((props) => {
  const { provience } = useParams();
  console.log(provience);

  return <div>EpidemicProvience</div>;
});

export default EpidemicProvience;
