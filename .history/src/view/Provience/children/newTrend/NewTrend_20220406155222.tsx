import { memo } from "react";

import LineCharts from "@/component/echarts/lineCharts";

const NewTrend: any = memo((props: any) => {
  const { chinaProvienceData } = props;

  const ProvienceData =
    chinaProvienceData.length === 0 ? [] : chinaProvienceData;

  const DataList = [];

  for (let item of ProvienceData) {
    console.log(item);
    const temp = {
      date: item.year + "." + item.date,
      新增确诊: item.newConfirm,
      新增死亡: item.newDead,
      新增康复: item.newHeal,
    };
    DataList.push(temp);
  }

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>{`疫情新增趋势`}</h4>
      <LineCharts dataList={DataList} />
    </div>
  );
});

export default NewTrend;
