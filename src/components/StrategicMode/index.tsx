import React, { useState } from "react";
import { Button } from "antd";

const strategic: any = {
  1: Template1,
  2: Template2,
  3: Template3,
};
// 设计模式函数


export default function StrategicMode() {
  const [count, setCount] = React.useState(1);
  const Template = strategic[count];

  return (
    <div>
      <Button onClick={() => setCount(1)}>点击1</Button>
      <Button onClick={() => setCount(2)}>v2</Button>
      <Button onClick={() => setCount(3)}>点击3</Button>
      <Template code={count} id={count} />
    </div>
  );
}

interface templateProps {
  code: number;
  id: number;
}

function Template1({ code, id }: templateProps) {
  console.log("Template1: ", code, id);

  return <div style={{ color: "red" }}>Template1 {code}</div>;
}

function Template2({ code, id }: templateProps) {
  console.log("Template2: ", code, id);

  return <div style={{ color: "green" }}>Template2{code}</div>;
}
function Template3({ code, id }: templateProps) {
  console.log("Template3: ", code, id);
  return <div style={{ color: "#ccc" }}>Template3{code}</div>;
}
