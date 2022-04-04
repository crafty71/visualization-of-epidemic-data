import { memo } from "react";

//components

import { Row, Col, Card } from "antd";

// styled

import { EpidemicStatisticsWrapper } from "./EpidemicStatisticsStyle";

const EpidemicStatistics = memo(() => {
  return (
    <EpidemicStatisticsWrapper>
      <Row gutter={8}>
        <Col span={8}>
          <Card style={{ width: "100%" }}>
            <div className="CardContent">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </div>
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
    </EpidemicStatisticsWrapper>
  );
});

export default EpidemicStatistics;
