import React, { memo } from "react";

import { useSelector, shallowEqual } from "react-redux";
import { defaultState } from "../../store/store";

import { Space, Table } from "antd";
import { Link } from "react-router-dom";

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

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  const colums: any = [
    {
      title: "地区",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link to={`/provience/${text}`} style={{ color: "#526fff" }}>
            {text}
          </Link>
        </Space>
      ),
    },
    // {
    //   title: "省份",
    //   dataIndex: "province",
    //   key: "city",
    //   align: "center",
    //   render: (text: any, record: any) => (
    //     <Space size="middle">
    //       <Link to={`/provience/${text}`} style={{ color: "#526fff" }}>
    //         {text}
    //       </Link>
    //     </Space>
    //   ),
    // },
    {
      title: "现有",
      dataIndex: "confirm",
      key: "confirm",
      align: "center",
    },
    {
      title: "累计",
      dataIndex: "nowConfirm",
      key: "nowConfirm",
      align: "center",
    },
    {
      title: "治愈",
      dataIndex: "heal",
      key: "heal",
      align: "center",
    },
    {
      title: "死亡",
      dataIndex: "dead",
      key: "dead",
      align: "center",
    },
  ];

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>中国疫情</h4>
      <Table
        dataSource={DataList}
        pagination={paginationProps}
        columns={colums}
      ></Table>
    </div>
  );
});

export default EpidemicChina;
