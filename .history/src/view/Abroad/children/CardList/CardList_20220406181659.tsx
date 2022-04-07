import { memo } from "react";

import { Card } from "antd";

import { Row, Col } from "antd";

const CardList = memo(() => {
  const EpidemicProvience = memo(() => {
    const { chinaProvienceData } = useSelector(
      (defaultState: any) => ({
        chinaProvienceData: defaultState.getIn([
          "demestic",
          "chinaProvienceData",
        ]),
      }),
      shallowEqual
    );
  
    const { provience } = useParams();
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getchinaProvienceDataAction(provience));
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
