import { memo, ReactChild, ReactFragment, ReactPortal } from "react";
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

  const paginationProps = {
    showQuickJumper: true,
    showTotal: () => `共${areaTree.length}条`,
    pageSizeOptions: ["10", "15", "20", "30"],
    total: areaTree.length,
    // size: 'small'
    simple: true,
  };

  const colums = [
    {
      title: "城市",
    },
    {
      title: "省份",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "累计确诊",
      dataIndex: "confirm",
      key: "confirm",
    },
    {
      title: "今天新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
    },
    {
      title: "康复",
      dataIndex: "heal",
      key: "heal",
    },
    {
      title: "死亡",
      dataIndex: "dead",
      key: "dead",
    },
    {
      title: "更新日期",
      dataIndex: "sdate",
      key: "sdate",
    },
    {
      title: "风险区域",
      dataIndex: "grade",
      key: "grade",
      render: (
        text:
          | boolean
          | ReactChild
          | ReactFragment
          | ReactPortal
          | null
          | undefined
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
      ) => <a>{text}</a>,
    },
  ];

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>
        近期31省区市本土病例
      </h4>
      <Table dataSource={areaTree} pagination={paginationProps} rowKey={"city"}>
        <Column title="城市" dataIndex="city" key="city" />
        <Column title="省份" dataIndex="province" key="province" />
        <Column title="累计确诊" dataIndex="confirm" key="confirm" />
        <Column title="今天新增确诊" dataIndex="confirmAdd" key="confirmAdd" />
        <Column title="康复" dataIndex="heal" key="heal" />
        <Column title="死亡" dataIndex="dead" key="dead" />
        <Column title="更新日期" dataIndex="sdate" key="sdate" />
        <Column title="风险区域" dataIndex="grade" key="grade" />
      </Table>
    </div>
  );
});

export default EpidemicProvience;
