// 引入 ECharts 主模块
import * as echarts from "echarts/lib/echarts";

import chinaMapData from "@/config/china.json";

// 引入提示框和标题组件
import "echarts/lib/component/legend";
import "echarts/lib/component/title";

import "echarts/lib/chart/bar"; // 引入柱状图
import "echarts/lib/chart/radar"; // 引入雷达图
import "echarts/lib/chart/pie"; // 引入饼状图
import "echarts/lib/chart/line"; // 引入折线图

require("echarts/theme/macarons"); // echarts theme

const chinaMapDatas = chinaMapData;

echarts.registerMap("china", chinaMapDatas);
export default echarts;
