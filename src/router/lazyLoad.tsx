import React, { Suspense } from "react";
import { Spin } from "antd";

import loadingImg from "../assets/loading.gif";

/**
 * @description 路由懒加载
 * @param {Element} Component 需要访问的组件
 * @returns element
 */
const lazyLoad = (Component: any) => {
  return (
    <Suspense
      fallback={
        <Spin
          spinning={false}
          size="large"
          indicator={<img src={loadingImg}></img>}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        />
      }
    >
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
