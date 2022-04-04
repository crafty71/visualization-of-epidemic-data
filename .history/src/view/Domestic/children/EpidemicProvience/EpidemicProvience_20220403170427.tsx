import { memo } from "react";

import { Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

const EpidemicProvience = memo(() => {
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  return (
    <Table dataSource={data}>
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <>
            {tags.map((tag: {} | null | undefined) => (
              <Tag color="blue">{tag}</Tag>
            ))}
          </>
        )}
      />
    </Table>
  );
});

export default EpidemicProvience;
