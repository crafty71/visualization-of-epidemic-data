import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";
import { shallowEqual, useSelector } from "react-redux";

import { defaultState } from "../../store/store";

const EpidemicMap = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  const areaTree =
    demesticData.length === 0
      ? []
      : demesticData.diseaseh5Shelf.areaTree[0].children;

  console.log(areaTree);

  areaTree.map((item: any, index: number) => {
    console.log(item.total.nowConfirm);

    return [
      {
        name: item.name,
      },
    ];
  });

  return (
    <div>
      <MapEcharts />
    </div>
  );
});

export default EpidemicMap;
