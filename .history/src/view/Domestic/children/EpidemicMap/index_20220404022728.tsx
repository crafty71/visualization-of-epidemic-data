import { memo } from "react";
import MapEcharts from "@/component/echarts/mapCharts";
import { shallowEqual, useSelector } from "react-redux";

import { Row, Col } from "antd";

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
  const DataListTemp = [];

  for (let item of areaTree) {
    const Temp = {
      name: item.name,
      value: item.total.nowConfirm,
    };
    DataListTemp.push(Temp);
  }

  return (
    <div>
      <Row gutter={8}>
        <Col span={12}>
          <h4>现有确诊</h4>
          <MapEcharts dataList={DataListTemp} />
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
});

export default EpidemicMap;
