import { useState, useRef } from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

function Main({ before, after }) {
  const [rotate, setRotate] = useState(0);

  return (
    <MainStyled>
      <div className="card" style={{ "--rotate": rotate + "deg" }}>
        <div className="before" onClick={() => setRotate(180)}>
          {before}
        </div>
        <div className="after" onClick={() => setRotate(0)}>
          {after}
        </div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  .card {
    width: 180px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(var(--rotate));
    transition: all 0.4s ease-out;

    cursor: pointer;
    border-radius: 12px;

    .before {
      transform: translateZ(1px);
      background-color: #fff;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #fcf1b4;

      position: absolute;
      top: 0px;
      left: 0px;
    }

    .after {
      transform: rotateY(180deg);
      width: 100%;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid #fcf1b4;

      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
`;

// 用法
export default function TurnMe() {
  return (
    <TurnMeStyled>
      <div className="container">
        <Row gutter={40}>
          {["O", "P", "Q", "R"].map((e, k) => {
            return (
              <Col key={k}>
                <Main before={<p className="before">{e}</p>} after={<p className="back"></p>} />
              </Col>
            );
          })}
        </Row>
      </div>
    </TurnMeStyled>
  );
}
const TurnMeStyled = styled.div`
  .container {
    height: 100vh;
    background-color: #fcf1b4;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .before {
    width: 100%;
    height: 100%;
    padding-top: 40px;
    font-size: 64px;
    font-family: "Alimama_ShuHeiTi_Bold";
    text-align: center;
    color: #333;
  }

  .back {
    width: 100%;
    height: 100%;

    background: linear-gradient(135deg, #fbbd08 25%, transparent 0), linear-gradient(45deg, #fbbd08 25%, transparent 0),
      linear-gradient(-135deg, #fbbd08 25%, transparent 0), linear-gradient(-45deg, #fbbd08 25%, transparent 0);
    -webkit-background-position: 0 0, 0px 46px, 46px 0px, 46px 46px;
    background-position: 0 0, 0px 46px, 46px 0px, 46px 46px;
    -webkit-background-size: 46px 46px;
    background-size: 46px 46px;
    background-repeat: repeat;
  }
`;
