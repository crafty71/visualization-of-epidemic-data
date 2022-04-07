import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Card } from "antd";
import { Row, Col } from "antd";
import { WomWorldDataAction } from "../../store/actionCreators";

const CardList = memo(() => {
  const { WomWorldData } = useSelector(
    (defaultState: any) => ({
      WomWorldData: defaultState.getIn(["abroad", "WomWorldData"]),
    }),
    shallowEqual
  );
  console.log(WomWorldData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WomWorldDataAction());
  }, [dispatch]);
  return (
    <div style={{ padding: "10px" }}>
      <Row gutter={8} style={{ marginBottom: "8px" }}>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default CardList;
