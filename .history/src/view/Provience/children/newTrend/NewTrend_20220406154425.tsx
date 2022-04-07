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
      date: item.date + item.year,
      新增确诊: item.newConfirm,
      新增死亡: item.newDead,
      新增康复: item.newHeal,
    };
    DataList.push(temp);
  }

  return (
    <div>
      <LineCharts dataList={DataList} />
    </div>
  );
});

export default NewTrend;
