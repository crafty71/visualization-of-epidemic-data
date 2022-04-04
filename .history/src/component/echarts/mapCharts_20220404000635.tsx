import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const mapCharts = memo(() => {
  const chartsRef = createRef();

  const dataList = [
    {
      name: "南海诸岛",
      value: 100,
      eventTotal: 100,
      specialImportant: 10,
      import: 10,
      compare: 10,
      common: 40,
      specail: 20,
    },
    {
      name: "北京",
      value: 540,
    },
    {
      name: "天津",
      value: 130,
    },
    {
      name: "上海",
      value: 400,
    },
    {
      name: "重庆",
      value: 750,
    },
    {
      name: "河北",
      value: 130,
    },
    {
      name: "河南",
      value: 830,
    },
    {
      name: "云南",
      value: 110,
    },
    {
      name: "辽宁",
      value: 19,
    },
    {
      name: "黑龙江",
      value: 150,
    },
    {
      name: "湖南",
      value: 690,
    },
    {
      name: "安徽",
      value: 60,
    },
    {
      name: "山东",
      value: 39,
    },
    {
      name: "新疆",
      value: 4,
    },
    {
      name: "江苏",
      value: 31,
    },
    {
      name: "浙江",
      value: 104,
    },
    {
      name: "江西",
      value: 36,
    },
    {
      name: "湖北",
      value: 52,
    },
    {
      name: "广西",
      value: 33,
    },
    {
      name: "甘肃",
      value: 7,
    },
    {
      name: "山西",
      value: 5,
    },
    {
      name: "内蒙古",
      value: 778,
    },
    {
      name: "陕西",
      value: 22,
    },
    {
      name: "吉林",
      value: 4,
    },
    {
      name: "福建",
      value: 18,
    },
    {
      name: "贵州",
      value: 5,
    },
    {
      name: "广东",
      value: 98,
    },
    {
      name: "青海",
      value: 1,
    },
    {
      name: "西藏",
      value: 0,
    },
    {
      name: "四川",
      value: 44,
    },
    {
      name: "宁夏",
      value: 4,
    },
    {
      name: "海南",
      value: 22,
    },
    {
      name: "台湾",
      value: 3,
    },
    {
      name: "香港",
      value: 5,
    },
    {
      name: "澳门",
      value: 555,
    },
  ];

  const option = {
    visualMap: {
      //地图图例
      show: true,
      left: 26,
      bottom: 0,
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
          color: "#bcc5ee",
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
      zoom: 1,
      top: 0,
      label: {
        normal: {
          show: true,
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
        name: "突发事件",
        type: "map",
        geoIndex: 0,
        data: dataList,
      },
    ],
  };

  useEffect(() => {
    initEcharts();
    return () => {
      echarts.dispose("");
    };
  });
  const initEcharts = () => {
    const element = chartsRef.current as HTMLElement;
    const charts = echarts.init(element);
    charts.setOption(option);
  };
  return (
    <div
      ref={chartsRef as React.RefObject<HTMLDivElement>}
      id="charts"
      style={{ height: "300px" }}
    ></div>
  );
});

export default mapCharts;
