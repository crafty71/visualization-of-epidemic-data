import { createRef, memo, useEffect } from "react";
import * as echarts from "echarts";
import mapData from "@/config/mapData";

const Abroad = memo(() => {
  const chartsRef = createRef();

  useEffect(() => {
    if (echarts) {
      initEcharts();
    }
    return () => {
      console.log(123);

      echarts.dispose("");
    };
  });
  const initEcharts = () => {
    // 渲染echarts2的方法开始
    const echarts2 = () => {
      const chartDom = chartsRef.current as HTMLElement;
      //这里放的“echarts2”就是你上方创建盒子的id
      var myChart = echarts.init(chartDom);
      var option;
      myChart.showLoading(); //2、 这个geoJson数据可以自己在网上找相关的浙江省的数据，或者从后端的接口来调用数据
      myChart.hideLoading();
      //下面这个geoJSON就是上面通过import 引入的自己制作的mapData.js文件
      echarts.registerMap("ZJ", geoJson.mapData);
      myChart.setOption(
        (option = {
          //4、 这个是放到一小块地图上展示的内容，他是根据series中的data数组来决定的name:b，value:c（b: 表示名称，c: 表示值）
          tooltip: {
            trigger: "item",
            formatter: "{b}<br/>{c} (分)",
          }, //6、 这个是根据data中的value值来相应的显示不同的颜色（在这里是根据人口密度来显示不同的颜色；）
          visualMap: {
            show: true,
            x: "left",
            y: "58%", //可以设置左边提示的位置；
            itemWidth: 12,
            itemHeight: 12,
            splitList: [
              { start: 0, end: 20, label: "轻微", color: "#29A4D7" },
              { start: 20, end: 50, label: "一般", color: "#E6C249" },
              { start: 50, end: 60, label: "重点提示", color: "#DD970B" },
              { start: 60, end: 80, label: "重大", color: "#5934EC" },
              { start: 80, end: 100, label: "重点关注", color: "#B52621" },
            ],
            textStyle: {
              color: "#fff", // 值域文字颜色
            }, // color: ['#B52621', '#5934EC', '#DD970B', '#E6C249', '#29A4D7']
          },
          series: [
            {
              name: "China",
              type: "map",
              mapType: "ZJ", // 自定义扩展图表类型 // 设置每一块中具体文字
              label: {
                normal: {
                  show: true,
                  formatter: function (params: {
                    name: string;
                    value: string;
                  }) {
                    return params.name + "\n" + params.value;
                  },
                  textStyle: {
                    fontWeight: "normal",
                    fontSize: 12,
                    color: "#fff",
                  },
                },
              }, // 下面这个可以设置鼠标悬停上面的效果
              emphasis: {
                //对应的鼠标悬浮效果
                // show: true,
                label: {
                  textStyle: { color: "#FFFFFF" },
                },
                itemStyle: {
                  areaColor: "#CCC",
                },
              },
              itemStyle: {
                //设置边框为白色
                normal: {
                  borderWidth: 0.5, //边际线大小
                  borderColor: "#fff", //边界线颜色
                },
              },
              data: [],
            },
          ],
        })
      );
      option && myChart.setOption(option);
      //下面这个是做屏幕适配的
      window.addEventListener("resize", function () {
        myChart.resize(); // console.log('#2334434545')
      });
    }; // 渲染echrts2的方法结束
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
