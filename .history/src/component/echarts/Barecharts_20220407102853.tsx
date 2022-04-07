/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const Barecharts: any = memo((props: any) => {
  const { dataList } = props;

  const chartsRef = createRef();

  const option = {
    dataset: {
      source: dataList,
    },
    dataZoom: [
      {
        type: "slider",
        height: 20,
        start: 0,
        bottom: 5,
        end: 100,
        textStyle: {
          color: "#d4ffff",
          fontSize: 11,
        },
      },
      {
        type: "inside",
      },
    ],
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

  window.onresize = function () {
    const element = chartsRef.current as HTMLElement;
    if (element == null) {
      return;
    }
    echarts.resize();
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

export default Barecharts;
