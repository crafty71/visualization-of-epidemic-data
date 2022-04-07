/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const lineCharts: any = memo((props: any) => {
  const { dataList } = props;
  console.log(Object.keys(dataList[0]).length - 1);
  const length = Object.keys(dataList[0]).length - 1;

  const seriesData: any = [];
  if (length === 0) {
    return;
  } else {
    for (let i = 0; i <= length; i++) {
      seriesData.push({
        smooth: true,
        type: "line",
        emphasis: {
          focus: "series",
        },
      });
    }
  }

  const chartsRef = createRef();

  const option = {
    dataset: {
      source: dataList,
    },
    title: {
      text: "疫情趋势统计",
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
      {
        type: "value",
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: seriesData,
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
