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

  const DataList = [];

  for (let item of areaTree) {
    const temp = {
      name: item.name, // 地区
      confirm: item.total.confirm, // 累计
      dead: item.total.dead, // 死亡
      nowConfirm: item.total.nowConfirm,
      heal: item.total.heal,
    };
    DataList.push(temp);
  }
  // const [children] = areaTree.lengt;
  // if (areaTree.length === 0) {
  //   return [];
  // } else {
  //   const [children] = areaTree;
  //   console.log(children.children);
  // }

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>中国疫情</h4>
      <Table dataSource={DataList} pagination={paginationProps}>
        <Column title="地区" dataIndex="name" key="name" />
        <Column title="现有" dataIndex="confirm" key="confirm" />
        <Column title="累计" dataIndex="nowConfirm" key="nowConfirm" />
        <Column title="治愈" dataIndex="heal" key="heal" />
        <Column title="死亡" dataIndex="dead" key="dead" />
      </Table>
    </div>
  );
});

export default EpidemicChina;
