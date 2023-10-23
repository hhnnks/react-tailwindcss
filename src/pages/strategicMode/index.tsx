import React from "react";

const strategic: any = {
  1: Template1,
  2: Template2,
  3: Template3,
};

interface IStrategicModeProps {
  id: number;
}

function StrategicMode({ id = 1 }: IStrategicModeProps) {
  const Template = strategic[id];

  return (
    <div>
      <Template code={id} id={id} />
    </div>
  );
}

interface templateProps {
  code: number;
  id: number;
}

function Template1({ code, id }: templateProps) {
  console.log("Template1: ", code, id);

  return <div>Template1 {code}</div>;
}

function Template2({ code, id }: templateProps) {
  console.log("Template2: ", code, id);

  return <div>Template2{code}</div>;
}
function Template3({ code, id }: templateProps) {
  console.log("Template3: ", code, id);
  return <div>Template3{code}</div>;
}

export default StrategicMode;
