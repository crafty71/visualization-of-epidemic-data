import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";

const EpidemicMap = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  const areaTree =
    demesticData.length === 0 ? [] : demesticData.statisGradeCityDetail;
  return (
    <div>
      <MapEcharts />
    </div>
  );
});

export default EpidemicMap;
