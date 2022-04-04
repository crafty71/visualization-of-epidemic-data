import { createRef, memo, useEffect } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  const chartsRef = createRef();

  useEffect(() => {
    if (echarts) {
      initEcharts();
    }
    return () => {
      console.log(123);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      echarts.dispose(chartsRef.current as HTMLElement);
    };
  });
  const initEcharts = () => {
    const element = document.getElementById("charts") as HTMLElement;
    const charts = echarts.init(element);
    charts.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
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
