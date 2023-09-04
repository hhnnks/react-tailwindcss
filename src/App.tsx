import "./App.css";

import React, { useEffect, useRef } from "react";

import Workflow from "./pages/workflow";
import { xml, users, groups, categorys } from "./data";


import Demo_1 from "./view/demo_1";

function App() {
  const refNode = useRef(null);

  useEffect(() => {
    getModelDetail();
  }, []);

  const saveModeler = (data: any) => {
    console.log(data);
  };

  const getModelDetail = () => {
    fetch(
      "https://cdn.jsdelivr.net/gh/goldsubmarine/workflow-bpmn-modeler@master/src/Leave.bpmn20.xml"
    )
      .then((response) => {
        return response.text();
      })
      .then((xml) => {
        console.log("xml: ", xml);
      });
  };

  return (
    // <Workflow
    //   xml={xml}
    //   users={users}
    //   groups={groups}
    //   categorys={categorys}
    //   isView={false}
    //   save={saveModeler}
    // />

    <Demo_1/>
  );
}

export default App;
