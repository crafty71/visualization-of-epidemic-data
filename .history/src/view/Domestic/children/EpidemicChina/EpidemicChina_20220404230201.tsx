import React, { memo } from "react";

import { useSelector, shallowEqual } from "react-redux";
import { defaultState } from "../../store/store";

import { Table } from "antd";

const { Column } = Table;

const EpidemicChina = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  const areaTree =
    demesticData.length === 0
      ? []
      : demesticData.diseaseh5Shelf.areaTree[0].children;

  console.log(areaTree);

  // const [children] = areaTree.lengt;
  // if (areaTree.length === 0) {
  //   return [];
  // } else {
  //   const [children] = areaTree;
  //   console.log(children.children);
  // }

  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  return (
    <div>
      <Table dataSource={data} pagination={paginationProps}>
        <Column title="日期" dataIndex="firstName" key="firstName" />
        <Column title="现有" dataIndex="lastName" key="lastName" />
        <Column title="累计" dataIndex="age" key="age" />
        <Column title="治愈" dataIndex="address" key="address" />
      </Table>
      ,
    </div>
  );
});

export default EpidemicChina;