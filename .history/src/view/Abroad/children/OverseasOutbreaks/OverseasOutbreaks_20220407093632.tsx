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
  // WomAboardDataAction
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

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
  ];

  const paginationProps = {
    showQuickJumper: true,
    simple: true,
  };

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={paginationProps}
      />
    </div>
  );
});

export default OverseasOutbreaks;
