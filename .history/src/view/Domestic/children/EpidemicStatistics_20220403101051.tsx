import { memo } from "react";

//components

import { Row, Col } from "antd";

const EpidemicStatistics = memo(() => {
  return (
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
  );
});

export default EpidemicStatistics;
