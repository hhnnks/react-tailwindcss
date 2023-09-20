import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

import "./demo_scroll_table.less";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 0 : 1,
    }),
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 0 : 1,
    }),
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 0 : 1,
    }),
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 0 : 1,
    }),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const DemoScrollTable: React.FC = () => (
  <div className="scroll-table">
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500, y: 300 }}
      onHeaderRow={(columns, index) => {
        return {
          className: "ant-table-thead-two",
        };
      }}
    />
  </div>
);

export default DemoScrollTable;
