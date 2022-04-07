import React, { memo } from "react";

import { Row, Col } from "antd";

const CardList = memo(() => {
  return (
    <div>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  );
});

export default CardList;
