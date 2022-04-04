/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const lineCharts: any = memo((props: any) => {
  const { dataList } = props;

  const chartsRef = createRef();

  const option = {
    dataset: {
      source: [
        { product: "Matcha Latte", 目前确诊: 823, score: 95.8, value: 102 },
        { product: "Milk Tea", 目前确诊: 235, score: 81.4, value: 87 },
        { product: "Cheese Cocoa", 目前确诊: 1042, score: 91.2, value: 79 },
        { product: "Walnut Brownie", 目前确诊: 988, score: 76.9, value: 187 },
      ],
    },
    title: {
      text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
      },
      {
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
      },
    ],
  };

  useEffect(() => {
    initEcharts();
  }, [dataList]);
  const initEcharts = () => {
    const element = chartsRef.current as HTMLElement;
    if (element == null) {
      return;
    }
    echarts.dispose(element);
    const charts = echarts.init(element);
    charts.setOption(option);
  };
  return (
    <div
      ref={chartsRef as React.RefObject<HTMLDivElement>}
      id="charts"
      style={{ height: "500px" }}
    ></div>
  );
});

export default lineCharts;
