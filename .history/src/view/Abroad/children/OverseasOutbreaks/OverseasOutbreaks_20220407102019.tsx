import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Table } from "antd";
import { WomAboardDataAction } from "../../store/actionCreators";

const OverseasOutbreaks = memo(() => {
  const { WomAboard } = useSelector(
    (defaultState: any) => ({
      WomAboard: defaultState.getIn(["abroad", "WomAboard"]),
    }),
    shallowEqual
  );

  console.log(WomAboard);

  const WomAboardTemp = WomAboard.length === 0 ? [] : WomAboard;

  for (let index of WomAboardTemp) {
    console.log(index);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WomAboardDataAction());
  }, [dispatch]);
  // WomAboardDataActions

  const columns: any = [
    {
      title: "国家",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "大洲",
      dataIndex: "continent",
      key: "continent",
      align: "center",
    },
    {
      title: "累计确诊",
      dataIndex: "confirm",
      key: "confirm",
      align: "center",
    },
    {
      title: "新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
      align: "center",
    },
    {
      title: "新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
      align: "center",
    },
    {
      title: "累计死亡",
      dataIndex: "dead",
      key: "dead",
      align: "center",
    },
    {
      title: "新增死亡",
      dataIndex: "deadCompare",
      key: "deadCompare",
      align: "center",
    },
    {
      title: "目前确诊",
      dataIndex: "nowConfirm",
      key: "nowConfirm",
      align: "center",
    },
    {
      title: "目前新增",
      dataIndex: "nowConfirmCompare",
      key: "nowConfirmCompare",
      align: "center",
    },
  ];

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  return (
    <div>
      <h4 style={{ fontSize: "22px", padding: "20px 0" }}>海外疫情</h4>
      <Table
        dataSource={WomAboard}
        columns={columns}
        pagination={paginationProps}
      />
    </div>
  );
});

export default OverseasOutbreaks;
