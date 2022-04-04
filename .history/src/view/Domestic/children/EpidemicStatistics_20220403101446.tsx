import { memo } from "react";

//components

import { Row, Col, Card } from "antd";

const EpidemicStatistics = memo(() => {
  return (
    <Row gutter={8}>
      <Col span={8}>
        <Card style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card style={{ width: "100%" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
});

export default EpidemicStatistics;
