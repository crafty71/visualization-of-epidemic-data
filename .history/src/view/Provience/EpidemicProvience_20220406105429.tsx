import React, { memo } from "react";
import { useParams } from "react-router-dom";

const EpidemicProvience = memo((props) => {
  const { id } = useParams();
  console.log(id);

  return <div>EpidemicProvience</div>;
});

export default EpidemicProvience;
