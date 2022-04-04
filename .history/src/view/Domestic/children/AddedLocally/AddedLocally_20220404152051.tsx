import React, { memo } from "react";
import lineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  return (
    <div>
      <lineCharts />
    </div>
  );
});

export default AddedLocally;
