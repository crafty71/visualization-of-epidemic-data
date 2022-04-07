import React, { memo } from "react";

import CardList from "./children/CardList/CardList";
import OverseasOutbreaks from "./children/OverseasOutbreaks/OverseasOutbreaks";

const index = memo(() => {
  return (
    <div>
      <CardList />
      <OverseasOutbreaks />
    </div>
  );
});

export default index;
