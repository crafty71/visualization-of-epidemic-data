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
      <EpidemicStatistics />
      <EpidemicProvience />
      <EpidemicMap />
      <AddedLocally />
      <AddDayList />
      <EpidemicChina />
    </div>
  );
});

export default Domestic;
