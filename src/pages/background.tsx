import { useState, useRef } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";
const styleList = [
  // 浅灰色
  "gray",
  "tianBox",
  // 蓝色
  "col-line",
  "row-line",
  "blue",
  // 灰色格子
  "grid",
  "grid-double",
  // 绿色
  "line-rotate",
  "line-rotate-left",
  "line-rotate-left-right",
  "xiaomai",
  "bianzi",
  "circle",
  "point",
  "hollowCircle",
  // 砖墙
  "reactBox",
  // 不知名形状
  "hahaha",
  "hahaha2",
  "hahaha3",
  "hahaha4",
  // 图片
  "image",
];

export default function Background() {
  const [active, setActive] = useState("gray");

  return (
    <TabbarStyled>
      <div className="container">
        <Row gutter={24}>
          <Col span={15}>
            <Row gutter={24}>
              {styleList.map((e, k) => {
                return (
                  <Col key={k}>
                    <div className={`${e} colorBox`} onMouseOver={() => setActive(e)}></div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={9}>
            <div className={`${active} showBox`}></div>
          </Col>
        </Row>
      </div>
    </TabbarStyled>
  );
}

const TabbarStyled = styled.div`
  .container {
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .showBox {
    width: 100%;
    height: 600px;
    border: 1px solid #eee;
    margin: 0px auto;
  }

  .colorBox {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    margin-top: 12px;
    cursor: pointer;
  }

  /* 灰色网格 */
  .gray {
    background-image: linear-gradient(90deg, #eee 1px, transparent 0), linear-gradient(#efefef 1px, transparent 0);
    background-size: 30px 30px;
    background-repeat: repeat;
  }

  /* 田字格 */
  .tianBox {
    background-image: linear-gradient(90deg, #aaa 2px, transparent 0), linear-gradient(#aaa 2px, transparent 0),
      linear-gradient(90deg, #efefef 1px, transparent 1px), linear-gradient(#efefef 1px, transparent 0);
    background-size: 60px 60px;
    background-position: 0 0, 0px 0px, 30px 0px, 0px 30px;
    background-repeat: repeat;
  }

  /* 横线条纹 */
  .row-line {
    background: linear-gradient(#5f76eb 50%, transparent 0);
    background-repeat: repeat;
    background-size: 30px 30px;
  }

  /* 竖线条纹 */
  .col-line {
    background: linear-gradient(90deg, #5f76eb 50%, transparent 0);
    background-repeat: repeat;
    background-size: 30px 30px;
  }

  /* 蓝色床单 */
  .blue {
    background: linear-gradient(90deg, rgba(78, 110, 242, 0.7) 50%, transparent 0),
      linear-gradient(rgba(78, 110, 242, 0.8) 50%, transparent 0);
    background-size: 30px 30px;
    background-repeat: repeat;
  }

  /* 格子 */
  .grid {
    background-image: linear-gradient(135deg, #515151 25%, transparent 0),
      linear-gradient(-45deg, #515151 25%, transparent 0), linear-gradient(135deg, #515151 25%, transparent 0),
      linear-gradient(-45deg, #515151 25%, transparent 0);
    background-size: 64px 64px;
    background-position: 0 0, -33px -32px, 32px 32px, -1px 0px;
    background-repeat: repeat;
  }

  /* 双色拼格子 */
  .grid-double {
    background-image: linear-gradient(135deg, #515151 25%, transparent 0),
      linear-gradient(-45deg, #515151 25%, transparent 0), linear-gradient(135deg, #999 25%, transparent 0),
      linear-gradient(-45deg, #999 25%, transparent 0);
    background-size: 64px 64px;
    background-position: 0 0, -33px -32px, 32px 32px, -1px 0px;
    background-repeat: repeat;
  }

  /* 绿色右侧斜条纹 */
  .line-rotate {
    background: linear-gradient(
      45deg,
      #39b54a 25%,
      transparent 25%,
      transparent 50%,
      #39b54a 50%,
      #39b54a 75%,
      transparent 75%
    );
    background-repeat: repeat;
    background-size: 40px 40px;
  }

  /* 绿色左侧斜条纹 */
  .line-rotate-left {
    background: linear-gradient(
      -45deg,
      #39b54a 25%,
      transparent 25%,
      transparent 50%,
      #39b54a 50%,
      #39b54a 75%,
      transparent 75%,
      transparent 75%
    );
    background-repeat: repeat;
    background-size: 40px 40px;
  }

  /* 绿色交叉斜条纹 */
  .line-rotate-left-right {
    background: linear-gradient(135deg, #fbbd08 25%, transparent 0), linear-gradient(45deg, #fbbd08 25%, transparent 0),
      linear-gradient(-135deg, #fbbd08 25%, transparent 0), linear-gradient(-45deg, #fbbd08 25%, transparent 0);
    background-position: 0 0, 0px 31px, 31px 0px, 31px 31px;
    background-size: 31px 31px;
    background-repeat: repeat;
  }

  /* 绿色交叉斜条纹 */
  .line-rotate-left-right {
    background: linear-gradient(135deg, #fbbd08 25%, transparent 0), linear-gradient(45deg, #fbbd08 25%, transparent 0),
      linear-gradient(-135deg, #fbbd08 25%, transparent 0), linear-gradient(-45deg, #fbbd08 25%, transparent 0);
    background-position: 0 0, 0px 31px, 31px 0px, 31px 31px;
    background-size: 31px 31px;
    background-repeat: repeat;
  }

  /* 小麦的形状 */
  .xiaomai {
    background: linear-gradient(135deg, #fbbd08 25%, transparent 0), linear-gradient(45deg, #fbbd08 25%, transparent 0),
      linear-gradient(-135deg, #fbbd08 25%, transparent 0), linear-gradient(-45deg, #fbbd08 25%, transparent 0);
    background-position: 0 0, 0px 20px, 20px 0px, 9px 9px;
    background-size: 20px 20px;
    background-repeat: repeat;
  }

  /* 辫子网格 */
  .bianzi {
    background: linear-gradient(-45deg, #8dc63f 25%, transparent 0), linear-gradient(45deg, #8dc63f 25%, transparent 0);
    background-position: 0px 0px, 20px 0px;
    background-size: 40px 20px;
    background-repeat: repeat;
  }

  /* 不知名 = - = */
  .hahaha {
    background: linear-gradient(135deg, #fbbd08 25%, transparent 0), linear-gradient(45deg, #fbbd08 25%, transparent 0),
      linear-gradient(-135deg, #fbbd08 25%, transparent 0), linear-gradient(-45deg, #fbbd08 25%, transparent 0);
    background-position: 0 0, 0px 10px, 31px 0px, 31px 31px;
    background-size: 31px 31px;
    background-repeat: repeat;
  }

  /* 不知名 = - = */
  .hahaha2 {
    background: linear-gradient(135deg, #5f76eb 25%, transparent 0), linear-gradient(45deg, #5f76eb 25%, transparent 0),
      linear-gradient(-135deg, #5f76eb 25%, transparent 0), linear-gradient(-45deg, #5f76eb 25%, transparent 0);
    background-position: 0 0, 0px 10px, 10px 0px, 50px 31px;
    background-size: 31px 31px;
    background-repeat: repeat;
  }

  /* 不知名 = - = */
  .hahaha3 {
    background: linear-gradient(135deg, #5f76eb 25%, transparent 0), linear-gradient(45deg, #5f76eb 25%, transparent 0),
      linear-gradient(-135deg, #5f76eb 25%, transparent 0), linear-gradient(-45deg, #5f76eb 25%, transparent 0);
    background-position: 0 0, 0px 10px, 20px 10px, 10px 32px;
    background-size: 40px 40px;
    background-repeat: repeat;
  }

  /* 不知名 = - = */
  .hahaha4 {
    background: linear-gradient(135deg, #5f76eb 25%, transparent 0), linear-gradient(45deg, #5f76eb 25%, transparent 0),
      linear-gradient(-135deg, #5f76eb 25%, transparent 0), linear-gradient(-45deg, #5f76eb 25%, transparent 0);
    background-position: 0 40px, 0px 20px, 40px 6px, 0px 60px;
    background-size: 60px 60px;
    background-repeat: repeat;
  }

  /* 圆 */
  .circle {
    background-image: radial-gradient(#5f76eb 20%, transparent 0), radial-gradient(#5f76eb 20%, transparent 0);
    background-size: 32px 32px;
    background-position: 0 0, 16px 16px;
    background-repeat: repeat;
  }

  /* 点阵 */
  .point {
    background-image: radial-gradient(#000 1px, transparent 0);
    background-size: 22px 22px;
    background-repeat: repeat;
  }

  /* 空心圆 */
  .hollowCircle {
    --pink: #1cbbb381;
    background-image: radial-gradient(
      transparent 20%,
      var(--pink) 20%,
      var(--pink) 40%,
      transparent 40%,
      transparent 60%,
      var(--pink) 60%,
      var(--pink) 80%,
      transparent 80%
    );
    background-size: 50px 50px;
    background-repeat: repeat;
  }

  /* 实心砖墙 */
  .reactBox {
    background-image: linear-gradient(155deg, #f37b1d 25%, transparent 0),
      linear-gradient(-25deg, #f37b1d 25%, transparent 0), linear-gradient(155deg, #f37b1d 25%, transparent 0),
      linear-gradient(-25deg, #f37b1d 25%, transparent 0);
    background-size: 64px 32px;
    background-position: 0 0, -32px -16px, 32px 16px, 0px 0px;
    background-repeat: repeat;
  }

  /* 阿不头像 */
  .image {
    background-image: url("/images/avatar.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
