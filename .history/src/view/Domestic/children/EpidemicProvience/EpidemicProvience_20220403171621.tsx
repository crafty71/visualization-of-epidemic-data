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
    demesticData.length === 0 ? [] : demesticData.areaTree.children;
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
    <Table dataSource={data}>
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
    </Table>
  );
});

export default EpidemicProvience;
