import { memo } from "react";
import { Row, Col, Card } from "antd";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";
import MapEcharts from "@/component/echarts/mapCharts";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
      <EpidemicProvience />
      <MapEcharts />
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
});

export default Domestic;
