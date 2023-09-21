import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

function Tab1({ count }: { count: number }) {
  return <div>tab1--{count}</div>;
}

function Tab2({ count }: { count: number }) {
  return <div>tab2--{count}</div>;
}

function Tab3({ count }: { count: number }) {
  return <div>tab3--{count}</div>;
}

const ComponentTabs: React.FC = () => {
  const [count, setCount] = useState(1);

  const filterFacitories: any = {
    "1": Tab1,
    "2": Tab2,
    "3": Tab3,
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: <Tab1 count={count} />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <Tab1 count={count} />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Tab1 count={count} />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
    setCount(Number(key));
  };

  const FilterComponent = filterFacitories[String(count)];
  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <FilterComponent count={count} />
    </React.Fragment>
  );
};

export default ComponentTabs;
