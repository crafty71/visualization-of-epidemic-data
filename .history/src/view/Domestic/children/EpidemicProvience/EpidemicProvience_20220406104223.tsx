import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { defaultState } from "../../store/store";
import { Link } from "react-router-dom";

import { Space, Table } from "antd";

const EpidemicProvience = memo(() => {
  const { demesticData } = useSelector(
    (defaultState: defaultState) => ({
      demesticData: defaultState.getIn(["demestic", "demesticData"]),
    }),
    shallowEqual
  );

  const areaTree =
    demesticData.length === 0 ? [] : demesticData.statisGradeCityDetail;

  const paginationProps = {
    showQuickJumper: true,
    showTotal: () => `共${areaTree.length}条`,
    pageSizeOptions: ["10", "15", "20", "30"],
    total: areaTree.length,
    // size: 'small'
    simple: true,
  };

  const colums: any = [
    {
      title: "城市",
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: "省份",
      dataIndex: "province",
      key: "city",
      align: "center",
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>{record.dataIndex}</a>
          <a href="">{text}</a>
        </Space>
      ),
    },
    {
      title: "累计确诊",
      dataIndex: "confirm",
      key: "confirm",
      align: "center",
    },
    {
      title: "今天新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
      align: "center",
    },
    {
      title: "康复",
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
    {
      title: "更新日期",
      dataIndex: "sdate",
      key: "sdate",
      align: "center",
    },
  ];

  const aherfClick = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>
        近期31省区市本土病例
      </h4>
      <Table
        dataSource={areaTree}
        pagination={paginationProps}
        rowKey={"city"}
        columns={colums}
      ></Table>
    </div>
  );
});

export default EpidemicProvience;
