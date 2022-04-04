import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";

const EpidemicMap = memo(() => {
  return (
    <div>
      <MapEcharts />
    </div>
  );
});

export default EpidemicMap;
