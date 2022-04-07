import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Card } from "antd";
import { Row, Col } from "antd";
import { WomWorldDataAction } from "../../store/actionCreators";

import { CardListWrapper } from "./CardListStyle";

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
    <CardListWrapper style={{ padding: "10px" }}>
      <Row gutter={8} style={{ marginBottom: "8px" }}>
        <Col span={6}>
          <Card title="累计确诊">
            <p className="cardContent">{WomWorldData.confirm}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增确诊">
            <p className="cardContent">{WomWorldData.confirmAdd}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="累计治愈">
            <p className="cardContent">{WomWorldData.heal}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增治愈">
            <p className="cardContent">{WomWorldData.healAdd}</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <Card title="累计死亡">
            <p className="cardContent">{WomWorldData.dead}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="新增死亡">
            <p className="cardContent">{WomWorldData.deadAdd}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="目前确诊">
            <p className="cardContent">{WomWorldData.nowConfirm}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="确诊变化">
            <p className="cardContent">{WomWorldData.nowConfirmAdd}</p>
          </Card>
        </Col>
      </Row>
    </CardListWrapper>
  );
});

export default CardList;
