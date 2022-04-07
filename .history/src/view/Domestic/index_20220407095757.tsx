import { memo } from "react";

import { Row, Col } from "antd";

// components

import EpidemicStatistics from "./children/EpidemicStatistics/EpidemicStatistics";
import EpidemicProvience from "./children/EpidemicProvience/EpidemicProvience";
import EpidemicMap from "../Domestic/children/EpidemicMap/index";
import AddedLocally from "./children/AddedLocally/AddedLocally";
import AddDayList from "./children/AddDayList/AddDayList";
import EpidemicChina from "./children/EpidemicChina/EpidemicChina";

const Domestic = memo(() => {
  return (
    <div style={{ padding: "10px" }}>
      <Row>
        <Col span={24}>
          <EpidemicStatistics />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <EpidemicProvience />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <EpidemicMap />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <AddedLocally />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddDayList />
        </Col>
      </Row>

      <EpidemicChina />
    </div>
  );
});

export default Domestic;
