import { memo } from "react";

import { Card } from "antd";

import { Row, Col } from "antd";

const CardList = memo(() => {
  return (
    <div>
      <Row gutter={8}>
        <Col span={6}>col-6</Col>
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
