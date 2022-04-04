import { memo, useState } from "react";
import MapEcharts from "@/component/echarts/mapCharts";
import { shallowEqual, useSelector } from "react-redux";

import { defaultState } from "../../store/store";

const EpidemicMap = memo(() => {
  const [dataList, setDatList] = useState([]);
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

  const DataListTemp = areaTree.map((item: any, index: number) => {
    console.log(item.total.nowConfirm);

    return [
      {
        name: item.name,
        value: item.total.nowConfirm,
      },
    ];
  });

  setDatList(DataListTemp);

  return (
    <div>
      <MapEcharts dataList={dataList} />
    </div>
  );
});

export default EpidemicMap;
