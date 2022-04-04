import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";

const EpidemicMap = memo(() => {
  return (
    <div>
      <h4>现有确诊</h4>
      <MapEcharts />
    </div>
  );
});

export default EpidemicMap;
