import { useState, useRef } from "react";
import styled from "styled-components";

function Main({ navList }) {
  //当前选中item
  const [activeIndex, setActiveIndex] = useState(0);
  // 左侧距离
  const [left, setLeft] = useState(0);
  // 宽度
  const [width, setWidth] = useState("70px");

  const onHandleClick = ({ target }, index) => {
    const { width, left } = target.getBoundingClientRect(); //当前元素获取width 和 left
    const { left: parentleft } = target.parentNode.getBoundingClientRect(); //父级元素获取left
    //计算滑块应该在的距离
    setLeft(left - 6 - parentleft + "px");
    //计算滑块宽度
    setWidth(width + "px");
    setActiveIndex(index);
  };

  return (
    <TabbarStyled>
      <div className="container">
        <div className="tabbar" style={{ "--leftRef": left, "--widthRef": width }}>
          {navList.map((e, k) => {
            return (
              <p
                onClick={(event) => onHandleClick(event, k)}
                className={activeIndex == k ? "active item" : "item"}
                key={k}
              >
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </TabbarStyled>
  );
}

const TabbarStyled = styled.div`
  height: 100vh;
  background-color: #e0eaf7;
  display: flex;
  justify-content: center;
  align-items: center;

  .tabbar {
    display: flex;
    background-color: #fff;
    border-radius: 20px 20px 48px 48px;
    position: relative;
    border: 6px solid #fff;
    overflow: hidden;

    /* 伪元素 滑块 */
    &::before {
      position: absolute;
      content: "";
      width: var(--widthRef);
      height: 100%;
      background-color: #598bf0;
      border-radius: 20px;
      transform: translateX(var(--leftRef));
      transition: 0.3s;
      transition-timing-function: ease-in-out;
    }
  }

  .item {
    color: #598bf0;
    margin: 0px;
    padding: 10px 24px;
    z-index: 10;
    cursor: pointer;
    /* 设置item 文字变化效果 以免闪 */
    transition: 0.3s;
    line-height: 48px;
    font-size: 14px;
    font-family: 'Alimama_ShuHeiTi_Bold';
  }

  .active {
    color: #fff;
  }
`;

// 用法
export default function Tabbar() {
  const navList = ["首页", "分类", "购物车", "我的"];
  return <Main navList={navList} />;
}
