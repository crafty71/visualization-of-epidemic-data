import { memo } from "react";

import { Card } from "antd";

import { Row, Col } from "antd";

const CardList = memo(() => {
  return (
    <div>
      <Row gutter={8}>
        <Col span={6}>
          <Card title="Default size card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  );
});

export default CardList;
