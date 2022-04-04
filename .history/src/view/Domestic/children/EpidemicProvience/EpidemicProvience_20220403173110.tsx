import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { defaultState } from "../../store/store";

import { Table } from "antd";

const { Column } = Table;

const EpidemicProvience = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  const areaTree =
    demesticData.length === 0 ? [] : demesticData.statisGradeCityDetail;
  console.log(areaTree);

  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <Table dataSource={areaTree}>
      <Column title="城市" dataIndex="city" key="city" />
      <Column title="省份" dataIndex="province" key="province" />
      <Column title="累计确诊" dataIndex="confirm" key="confirm" />
      <Column title="今天新增确诊" dataIndex="confirmAdd" key="confirmAdd" />
      <Column title="康复" dataIndex="heal" key="heal" />
      <Column title="死亡" dataIndex="dead" key="dead" />
    </Table>
  );
});

export default EpidemicProvience;
