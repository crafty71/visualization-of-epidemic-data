import React, { memo } from "react";

import CardList from "./children/CardList/CardList";

const index = memo(() => {
  return (
    <div>
      <CardList />
    </div>
  );
});

export default index;
