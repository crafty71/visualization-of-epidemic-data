import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Table } from "antd";

const OverseasOutbreaks = memo(() => {
  const { WomWorldData } = useSelector(
    (defaultState: any) => ({
      WomWorldData: defaultState.getIn(["abroad", "WomWorldData"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(WomWorldDataAction());
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
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
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
