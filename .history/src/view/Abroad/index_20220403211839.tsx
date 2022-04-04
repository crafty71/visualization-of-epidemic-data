import React, { memo } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  const initEcharts = () => {
    const element = document.getElementById("charts") as HTMLElement;
    let charts = echarts.init(element);

    charts.setOption({});
  };
  return <div id="charts">index</div>;
});

export default Abroad;
