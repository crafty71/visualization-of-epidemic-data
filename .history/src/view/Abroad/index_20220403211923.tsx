import React, { memo } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  const initEcharts = () => {
    const element = document.getElementById("charts") as HTMLElement;
    let charts = echarts.init(element);

    charts.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    });
  };
  return <div id="charts">index</div>;
});

export default Abroad;
