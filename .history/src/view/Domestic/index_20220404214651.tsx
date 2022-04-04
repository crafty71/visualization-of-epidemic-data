import { memo } from "react";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";
import EpidemicMap from "../Domestic/children/EpidemicMap/index";
import AddedLocally from "./children/AddedLocally/AddedLocally";
import AddDayList from "./children/AddDayList/AddDayList";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
      <EpidemicProvience />
      <EpidemicMap />
      <AddedLocally />
      <AddDayList />
    </div>
  );
});

export default Domestic;
