/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const lineCharts: any = memo((props: any) => {
  const { dataList } = props;
  const length =
    dataList.length === 0 ? 1 : Object.keys(dataList[0]).length - 2;

  console.log(length);

  const chartsRef = createRef();

  const seriesData: any = [];

  const addseries = (length: any) => {
    for (let index = 0; index <= length; index++) {
      seriesData.push({
        smooth: true,
        type: "line",
        emphasis: {
          focus: "series",
        },
      });
    }
  };

  const option = {
    dataset: {
      source: dataList,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
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
      {
        type: "value",
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: seriesData,
    dataZoom: [
      {
        type: "slider",
        height: 20,
        start: 90,
        bottom: 10,
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
  };

  useEffect(() => {
    addseries(length);
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
