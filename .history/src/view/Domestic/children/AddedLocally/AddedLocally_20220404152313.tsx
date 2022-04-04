import React, { memo } from "react";
import LineCharts from "@/component/echarts/lineCharts";

const AddedLocally = memo(() => {
  return (
    <div>
      <LineCharts />
    </div>
  );
});

export default AddedLocally;
