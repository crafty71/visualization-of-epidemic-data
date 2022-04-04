/* eslint-disable react-hooks/exhaustive-deps */
import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const mapCharts: any = memo((props: any) => {
  const { dataList } = props;

  const chartsRef = createRef();

  const option = {
    tooltip: {
      show: true,
    },
    visualMap: {
      title: {
        text: "现有确诊",
      },
      //地图图例
      show: true,
      showLabel: true,
      pieces: [
        //根据数据大小，各省显示不同颜色
        {
          gte: 100,
          label: ">= 1000",
          color: "#de1f05",
        },
        {
          gte: 500,
          lt: 999,
          label: "500 - 999",
          color: "#ff2736",
        },
        {
          gte: 100,
          lt: 499,
          label: "100 - 499",
          color: "#ff6341",
        },
        {
          gte: 10,
          lt: 99,
          label: "10 - 99",
          color: "#ffa577",
        },
        {
          lt: 10,
          label: "<10",
          color: "#ffe7b2",
        },
        {
          lt: 0,
          label: "<0",
          color: "#cccccc",
        },
      ],
    },
    geo: {
      //中国地图设置
      map: "china",
      scaleLimit: {
        min: 1,
        max: 2,
      },
      zoom: 1.2,
      top: 80,
      label: {
        normal: {
          show: false,
          fontSize: "14",
          color: "rgba(0,0,0,0.7)",
        },
      },
      itemStyle: {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.2)",
        },
        emphasis: {
          areaColor: "#f2d5ad",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0,
        },
      },
    },
    series: [
      {
        name: "地图",
        type: "map",
        geoIndex: 0,
        data: dataList || [],
      },
    ],
  };

  useEffect(() => {
    initEcharts();
    return () => {
      echarts.dispose("");
    };
  }, [dataList]);
  const initEcharts = () => {
    const element = chartsRef.current as HTMLElement;
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

export default mapCharts;
