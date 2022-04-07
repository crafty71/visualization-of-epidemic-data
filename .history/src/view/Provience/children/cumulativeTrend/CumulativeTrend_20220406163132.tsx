import { memo } from "react";

import LineCharts from "@/component/echarts/lineCharts";

const CumulativeTrend: any = memo((props: any) => {
  const { chinaProvienceData, provience } = props;

  const ProvienceData =
    chinaProvienceData.length === 0 ? [] : chinaProvienceData;

  const DataList = [];

  for (let item of ProvienceData) {
    console.log(item);
    const temp = {
      date: item.year + "." + item.date,
      累计确诊: item.confirm,
      累计死亡: item.dead,
      累计治愈: item.heal,
      累计无症状: item.zz,
    };
    DataList.push(temp);
  }

  return (
    <div style={{ height: "600px" }}>
      <h4
        style={{ fontSize: "22px", padding: "20px 0" }}
      >{`${provience}疫情新增趋势`}</h4>
      <LineCharts dataList={DataList} />
    </div>
  );
});

export default CumulativeTrend;
