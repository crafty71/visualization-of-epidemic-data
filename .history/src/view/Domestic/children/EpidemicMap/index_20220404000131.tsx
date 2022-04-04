import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";

const index = memo(() => {
  return (
    <div>
      <MapEcharts />
    </div>
  );
});

export default index;
