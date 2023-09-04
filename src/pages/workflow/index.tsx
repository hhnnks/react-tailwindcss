import React, { useState, useEffect, useRef } from "react";
import { Layout, Upload, Tooltip, Button } from "antd";

import customTranslate from "./common/customTranslate";
import Modeler from "bpmn-js/lib/Modeler";
// import panel from "./PropertyPanel";
// import BpmData from "./BpmData";
import getInitStr from "./flowable/init";
// 引入flowable的节点文件
import flowableModdle from "./flowable/flowable.json";

import "./index.scss";
const { Header, Footer, Sider, Content } = Layout;

interface IProps {
  xml: string;
  users: any;
  groups: any;
  categorys: any;
  isView: boolean;
  save: Function;
}

function Workflow({ xml, users, groups, categorys, isView, save }: IProps) {
  const [bpmnModeler, setBpmnModeler] = useState<any>();
  const canvas = useRef<any>(null);

  useEffect(() => {
    // 生成实例
    const modeler = new Modeler({
      container: canvas?.current,
      additionalModules: [
        {
          translate: ["value", customTranslate],
        },
      ],
      moddleExtensions: {
        flowable: flowableModdle,
      },
    });

    // 新增流程定义
    if (!xml) {
      newDiagram();
    } else {
      createNewDiagram(xml);
    }
  }, []);

  const newDiagram = () => {
    createNewDiagram(getInitStr());
  };

  const createNewDiagram = async (data: any) => {
    // 将字符串转换成图显示出来
    // data = data.replace(/<!\[CDATA\[(.+?)]]>/g, '&lt;![CDATA[$1]]&gt;')
    data = data.replace(
      /<!\[CDATA\[(.+?)]]>/g,
      function (match: any, str: any) {
        return str.replace(/</g, "&lt;");
      }
    );
    // try {
    //   await this.modeler.importXML(data);
    //   this.adjustPalette();
    //   this.fitViewport();
    //   // this.fillColor()
    // } catch (err) {
    //   console.error(err.message, err.warnings);
    // }
  };

  return (
    <Layout className="flow-containers">
      <Header className="flow-header">
        <div>
          <Tooltip title="mm">
            <Button>加载xml</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>新建</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>自适应屏幕</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>放大</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>缩小</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>后退</Button>
          </Tooltip>
          <Tooltip title="mm">
            <Button>前进</Button>
          </Tooltip>
        </div>
        <div>
          <Button>下载xml</Button>
          <Button>下载svg</Button>
          <Button>保存模型</Button>
        </div>
      </Header>
      <Content className="flow-content">
        <div ref={canvas} id="flow-canvas" className="canvas" />
      </Content>
    </Layout>
  );
}

export default Workflow;
