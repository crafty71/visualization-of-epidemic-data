import { createRef, memo, useEffect } from "react";
import echarts from "@/config/echarts.js";

const Abroad = memo(() => {
  const chartsRef = createRef();

  useEffect(() => {
    initEcharts();
    return () => {
      echarts.dispose();
    };
  });
  const initEcharts = () => {
    const element = chartsRef.current as HTMLElement;
    const charts = echarts.init(element);
    charts.setOption({
      backgroundColor: "#fff",
      title: {
        text: "全国销量统计",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: function (params: any) {
          return params.name + " : " + params.value[2];
        },
      },
      visualMap: {
        min: 0,
        max: 60000,
        left: 20,
        bottom: 20,
        calculable: true,
        text: ["高", "低"],
        inRange: {
          color: [
            "rgb(70, 240, 252)",
            "rgb(250, 220, 46)",
            "rgb(245, 38, 186)",
          ],
        },
        textStyle: {
          color: "#fff",
        },
      },
      geo: {
        map: "china",
        roam: "scale",
        emphasis: {
          areaColor: "#f4cccc",
          borderColor: "rgb(9, 54, 95)",
          itemStyle: {
            areaColor: "#f4cccc",
          },
        },
      },
      series: [
        {
          name: "销量",
          type: "scatter",
          coordinateSystem: "geo",
          data: [],
          symbolSize: 12,
          emphasis: {
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
          },
        },
        {
          type: "map",
          map: "china",
          geoIndex: 0,
          aspectScale: 0.75,
          tooltip: {
            show: false,
          },
        },
      ],
    });
  };
  return (
    <div
      ref={chartsRef as React.RefObject<HTMLDivElement>}
      id="charts"
      style={{ height: "300px" }}
    ></div>
  );
});

export default Abroad;
