import React, { memo } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  const initEcharts = () => {
    let charts = echarts.init(document.getElementById("charts")) as ;
  };
  return <div id="charts">index</div>;
});

export default Abroad;
