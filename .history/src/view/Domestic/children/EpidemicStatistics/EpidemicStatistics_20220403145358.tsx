import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { defaultState } from "../../store/store";
// api
import { getDomesticDataAction } from "../../store/actionCreators";

//components

import { Row, Col, Card } from "antd";

// styled

import { EpidemicStatisticsWrapper } from "./EpidemicStatisticsStyle";

const EpidemicStatistics = memo(() => {
  //redux
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDomesticDataAction());
  }, [dispatch]);

  // deal data
  const chinaTotal = demesticData.diseaseh5Shelf.chinaTotal;
  // const { diseaseh5Shelf } = demesticData;
  console.log(chinaTotal);

  return (
    <EpidemicStatisticsWrapper>
      <Row gutter={8}>
        <Col span={8}>
          <Card style={{ width: "100%" }}>
            <div className="CardContent">
              <p className="title">本土现有确证</p>
              <p className="number">25514</p>
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
        <Col span={8}>
          <Card style={{ width: "100%" }}>
            <div className="CardContent">
              <p className="title">本土现有确证</p>
              <p className="number">25514</p>
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