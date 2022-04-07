import React, { memo } from "react";

import { Row, Col } from "antd";

const CardList = memo(() => {
  return (
    <div>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
});

export default CardList;
