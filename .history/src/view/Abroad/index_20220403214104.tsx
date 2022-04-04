import { memo, useEffect } from "react";
import * as echarts from "echarts";

const Abroad = memo(() => {
  useEffect(() => {
    initEcharts();
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
    echarts.dispose(charts);
  };
  return <div id="charts" style={{ height: "300px" }}></div>;
});

export default Abroad;

// import { PureComponent } from "react";
// import * as echarts from "echarts";

// class index extends PureComponent {
//   componentDidMount() {
//     this.initEcharts();
//   }
//   componentWillUnmount() {
//     echarts.dispose();
//   }
//   initEcharts = () => {
//     const element = document.getElementById("charts") as HTMLElement;
//     const charts = echarts.init(element);

//     charts.setOption({
//       xAxis: {
//         type: "category",
//         data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//       },
//       yAxis: {
//         type: "value",
//       },
//       series: [
//         {
//           data: [150, 230, 224, 218, 135, 147, 260],
//           type: "line",
//         },
//       ],
//     });
//   };
//   render() {
//     return <div></div>;
//   }
// }

// export default index;
