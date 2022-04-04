import { memo, useEffect } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  useEffect(() => {
    if (echarts) {
      initEcharts();
    }
    return () => {
      console.log(123);

      echarts.dispose("");
    };
  });
  const initEcharts = () => {
    const element = document.getElementById("charts") as HTMLElement;
    const charts = echarts.init(element);
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
  return <div id="charts" style={{ height: "300px" }}></div>;
});

export default Abroad;
