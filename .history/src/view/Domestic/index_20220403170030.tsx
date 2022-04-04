import { memo } from "react";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
      <EpidemicProvience />
    </div>
  );
});

export default Domestic;
