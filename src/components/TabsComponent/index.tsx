import React, { useState } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";

const strategic = {
  1: Template1,
  2: Template2,
  3: Template3,
};

interface ITabsProps{
  key: string;
  label: string;
  children: React.ReactNode;
}

function TabsComponent() {
  const [count, setCount] = React.useState(1);
  const Template = strategic[2];

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: <Template code={count} id={count} />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <Template code={count} id={count} />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Template code={count} id={count} />,
    },
  ];

  return (
    <div>
      <Button onClick={() => setCount(1)}>点击1</Button>
      <Button onClick={() => setCount(2)}>v2</Button>
      <Button onClick={() => setCount(3)}>点击3</Button>
      StrategicMode <Template code={count} id={count} />
      <Tabs
        defaultActiveKey="1"
        key={count}
        // items={items}
        items={items.map((item, i) => {
          console.log('item: ', items);
          const id = String(i + 1);
          return {
            label: `Tab ${item.label}`,
            key: item.key,
            children: <Template code={count} id={count} />,
          };
        })}
        onChange={onChange}
        renderTabBar={(props, DefaultTabBar) => {
          console.log("tabBarProps, DefaultTabBar: ", props, DefaultTabBar);

          return <DefaultTabBar {...props} />;
        }}
      />
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

export default TabsComponent;
