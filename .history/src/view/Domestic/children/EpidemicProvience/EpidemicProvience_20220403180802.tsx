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
  console.log(areaTree.length);

  const paginationProps = {
    showQuickJumper: true,
    showTotal: () => `共${areaTree.length}条`,
    pageSizeOptions: ["10", "15", "20", "30"],
    total: areaTree.length,
    showSizeChanger: true,
    position: [],
  };

  return (
    <Table dataSource={areaTree} pagination={paginationProps}>
      <Column title="城市" dataIndex="city" key="city" />
      <Column title="省份" dataIndex="province" key="province" />
      <Column title="累计确诊" dataIndex="confirm" key="confirm" />
      <Column title="今天新增确诊" dataIndex="confirmAdd" key="confirmAdd" />
      <Column title="康复" dataIndex="heal" key="heal" />
      <Column title="死亡" dataIndex="dead" key="dead" />
      <Column title="更新日期" dataIndex="sdate" key="sdate" />
      <Column title="风险区域" dataIndex="grade" key="grade" />
    </Table>
  );
});

export default EpidemicProvience;
