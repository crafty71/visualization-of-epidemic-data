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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WomWorldDataAction());
  }, [dispatch]);

  return (
    <div style={{ padding: "10px" }}>
      <Row gutter={8} style={{ marginBottom: "8px" }}>
        <Col span={6}>
          <Card title="累计确诊">
            <p>{WomWorldData.confirm}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增确诊">
            <p>{WomWorldData.confirmAdd}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="累计治愈">
            <p>{WomWorldData.heal}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增治愈">
            <p>{WomWorldData.healAdd}</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <Card title="累计死亡">
            <p>{WomWorldData.dead}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增死亡">
            <p>{WomWorldData.deadAdd}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="目前确诊">
            <p>{WomWorldData.nowConfirm}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="确证变化">
            <p>{WomWorldData.nowConfirmAdd}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
});

export default CardList;
