import { memo } from "react";
import { Row, Col } from "antd";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";
import MapEcharts from "@/component/echarts/mapCharts";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
      <EpidemicProvience />
      <Row gutter={8}>
        <Col span={12}>
          <h4>现有确诊</h4>
          <MapEcharts />
        </Col>
        <Col span={12}>
          <h4>现有确诊</h4>
          <MapEcharts />
        </Col>
      </Row>
    </div>
  );
});

export default Domestic;
