import { memo } from "react";
import { Row, Col } from "antd";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";
import EpidemicMap from "../Domestic/children/EpidemicMap/index";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <EpidemicStatistics />
      <EpidemicProvience />
      <Row gutter={8}>
        <Col span={12}>
          <h4>现有确诊</h4>
          <EpidemicMap />
        </Col>
        <Col span={12}>
          <h4>累计确诊</h4>
          <EpidemicMap />
        </Col>
      </Row>
    </div>
  );
});

export default Domestic;
