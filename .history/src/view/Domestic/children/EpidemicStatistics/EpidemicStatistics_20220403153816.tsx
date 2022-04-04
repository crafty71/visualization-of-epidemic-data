import { memo, useEffect, useState } from "react";
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

  const chinaTotal =
    demesticData.length === 0 ? 0 : demesticData.diseaseh5Shelf.chinaTotal;

  // hocks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDomesticDataAction());
  }, [dispatch]);

  // // deal data
  // const chinaTotal = demesticData.diseaseh5Shelf.chinaTotal;
  // console.log(chinaTotal);

  return (
    <EpidemicStatisticsWrapper>
      <Row gutter={8}>
        <Col span={8}>
          <Card
            style={{ width: "100%", background: "#fffaf7" }}
            title="本土现有确诊"
          >
            <div className="CardContent">
              <p style={{ color: "#e57631" }} className="title">
                {chinaTotal.localConfirm}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span style={{ color: "#e57631" }}>1455</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: "100%", background: "#fffaf7" }}
            title="现有确证"
          >
            <div className="CardContent">
              <p style={{ color: "#e61c1d" }} className="title">
                {chinaTotal.nowConfirm}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span style={{ color: "#e61c1d" }}>1455</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "100%" }} title="累计确诊">
            <div className="CardContent">
              <p className="title" style={{ color: "#be2121" }}>
                {chinaTotal.confirm}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span className="otherNumber" style={{ color: "#be2121" }}>
                  1455
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "100%" }} title="无症状感染者">
            <div className="CardContent">
              <p className="title" style={{ color: "#ae3ac6" }}>
                {chinaTotal.noInfect}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span className="otherNumber" style={{ color: "#ae3ac6" }}>
                  1455
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "100%" }} title="境外输入">
            <div className="CardContent">
              <p className="title" style={{ color: "#4e8be6" }}>
                {chinaTotal.importedCase}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span className="otherNumber" style={{ color: "#4e8be6" }}>
                  1455
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ width: "100%" }} title="累计死亡">
            <div className="CardContent">
              <p className="title" style={{ color: "#4e5a65" }}>
                {chinaTotal.dead}
              </p>
              <div>
                <span className="otherTitle">较上日+</span>
                <span className="otherNumber" style={{ color: "#4e5a65" }}>
                  1455
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </EpidemicStatisticsWrapper>
  );
});

export default EpidemicStatistics;
