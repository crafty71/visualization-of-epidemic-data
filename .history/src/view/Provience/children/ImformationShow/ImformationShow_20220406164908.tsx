import React, { memo } from "react";

const ImformationShow = memo(() => {
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

export default ImformationShow;
