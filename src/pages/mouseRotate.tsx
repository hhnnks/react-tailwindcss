import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Main({}) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null); // 有效区域dom节点的ref

  const [rotate, setRotate] = useState({ x: 0, y: 0 }); // 旋转角度

  // 获取 鼠标交互部分的范围
  useEffect(() => {
    const { width, height } = containerRef.current.getBoundingClientRect();
    setSize({ width, height });

    // console.log("🚀 ~ file: mouse-rotate.jsx ~ line 13 ~ useEffect ~ width, height", width, height);
  }, []);

  // 鼠标移动时执行
  const getMouseLocal = (e) => {
    // console.log("🚀 ~ file: mouse-rotate.jsx ~ line 28 ~ getMouseLocal ~ e", e);
    const { width, height } = size; //有效区域大小
    const { x, y } = e.nativeEvent; //鼠标位置
    const degR = 20; //摆动幅度

    setRotate({
      x: (degR - y / (height / (degR * 2))).toFixed(1) + "deg",
      y: (x / (width / (degR * 2)) - degR).toFixed(1) + "deg",
    });
  };

  return (
    <MouseRotateStyled>
      <div className="container" onMouseMove={getMouseLocal} ref={containerRef}>
        <div className="content" style={{ "--rx": rotate.x, "--ry": rotate.y }}>
          <p className="title">Done in 2.85s.</p>
          <div className="card">**** **** **** 2148</div>
          <div className="card2">SVIP</div>
          <div className="lock"></div>
        </div>
      </div>
    </MouseRotateStyled>
  );
}

const MouseRotateStyled = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    width: 100%;
    height: 100vh;
  }

  .content {
    width: 400px;
    padding: 24px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;

    /* 最外层设置为3D */
    transform-style: preserve-3d;
    transform: rotateX(var(--rx)) rotateY(var(--ry));
    transition: all 0.1s;
  }

  .title {
    margin: 0px;
    font-size: 32px;
    text-align: center;
    color: #efefef;
    font-family:'Alimama_ShuHeiTi_Bold';
  }

  .card {
    width: 76%;
    height: 100px;
    border-radius: 20px;
    margin: 20px 0 20px -40px;
    padding: 20px;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    background: #7f7fd5;
    background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
    background: linear-gradient(-20deg, #91eae4, #86a8e7, #7f7fd5);

    /* card 的z轴偏移量 */
    transform: translateZ(40px);
  }

  .card2 {
    width: 24%;
    height: 80px;
    border-radius: 20px;
    margin: -60px 0 20px 280px;
    padding: 20px;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    background: #7f7fd5;
    background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
    background: linear-gradient(20deg, #ff3cac, #784ba0, #2b86c5);
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;

    /* card 的z轴偏移量 */
    transform: translateZ(100px);
  }

  .lock {
    width: 30px;
    height: 30px;
    border: 1px #efefef solid;
    border-radius: 50%;

    /* card 的z轴偏移量 */
    transform: translateZ(40px);
  }
`;

// 用法
export default function MouseRotate() {
  return <Main />;
}
