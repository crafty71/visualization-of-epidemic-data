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

  const DataList = [];

  for (let item of areaTree) {
    console.log(item.total);
    const temp = {
      name: item.name,
      confirm: item.total.confirm,
      dead: item.total.dead,
    };
  }

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
      <Table dataSource={areaTree} pagination={paginationProps}>
        <Column title="地区" dataIndex="areaTree.name" key="firstName" />
        <Column
          title="现有"
          dataIndex="areaTree.total.confirm"
          key="lastName"
        />
        <Column title="累计" dataIndex="areaTree.total.confirm" key="age" />
        <Column
          title="治愈"
          dataIndex="aareaTree.total.confirm"
          key="address"
        />
        <Column title="死亡" dataIndex="areaTree.total.confirm" key="address" />
      </Table>
      ,
    </div>
  );
});

export default EpidemicChina;
