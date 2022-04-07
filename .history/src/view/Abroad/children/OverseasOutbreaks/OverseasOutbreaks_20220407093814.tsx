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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WomAboardDataAction());
  }, [dispatch]);
  // WomAboardDataActions

  const columns = [
    {
      title: "国家",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "大洲",
      dataIndex: "continent",
      key: "continent",
    },
    {
      title: "累计确诊",
      dataIndex: "confirm",
      key: "confirm",
    },
    {
      title: "新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
    },
    {
      title: "新增确诊",
      dataIndex: "confirmAdd",
      key: "confirmAdd",
    },
  ];

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  return (
    <div>
      <Table
        dataSource={WomAboard}
        columns={columns}
        pagination={paginationProps}
      />
    </div>
  );
});

export default OverseasOutbreaks;
