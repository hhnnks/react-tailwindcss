import React, { useState, useEffect, useRef } from "react";

// 生成40条json数据
const generateData = (): any => {
  const data = [];
  for (let i = 0; i < 40; i++) {
    data.push({
      id: i,
      rowIndex: i,
      name: `Edith ${i}
            `,
      age: i,
      birthday: "2019-01-01",
      gender: i % 2,
      email: `edith${i}
            @example.com`,
      phone: `1381111111${i}
            `,
      remark: `remark${i}
            `,
    });
  }
  return data;
};

const EditTable = () => {
  const [editingCell, setEditingCell] = useState<any>(null);
  const [data, setData] = useState(generateData());

  //   const handleEdit = (rowIndex:any, columnIndex:any) => {
  //     setEditingCell({ rowIndex, columnIndex });
  //   };

  const handleSave = (rowIndex: any, columnIndex: any, value: any) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
    setEditingCell(null);
  };

  const handleCancel = () => {
    setEditingCell(null);
  };

  const handleSelect = (rowIndex: any) => {
    console.log("select happen", rowIndex);
  };
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, rowIndex: any) => (
          <tr key={rowIndex}>
            <td>{row.id}</td>
            <td>
              <input
                value={row.name}
                onChange={(e) => handleSave(rowIndex, "name", e.target.value)}
                onBlur={handleCancel}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditTable;
