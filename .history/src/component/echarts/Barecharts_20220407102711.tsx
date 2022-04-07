/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const Barecharts: any = memo((props: any) => {
  const { dataList } = props;

  const chartsRef = createRef();

  const option = {
    dataset: {
      source: [
        { 国家: "Matcha Latte", 新增: 823 },
        { 国家: "Milk Tea", 新增: 235 },
        { 国家: "Cheese Cocoa", 新增: 1042 },
        { 国家: "Walnut Brownie", 新增: 988 },
      ],
    },
    tooltip: {
      trigger: "item",
      axisPointer: {
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
      },
    ],
  };

  // window.onresize = function () {
  //   const element = chartsRef.current as HTMLElement;
  //   if (element == null) {
  //     return;
  //   }
  //   echarts.resize();
  // };

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

export default Barecharts;
