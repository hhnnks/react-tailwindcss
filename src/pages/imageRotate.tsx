import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Col, Input, Row, Space } from "antd";

function Main({ init, onChange }) {
  const [rotate, setRotate] = useState(init);
  const knobRef = useRef(null);

  //   输入框有更改就同步角度值
  const onInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (val != "" && !isNaN(val) && val >= 0 && val <= 360) {
      onParamsChange({ rotate: val });
    } else {
      onParamsChange({ rotate: 0 });
    }
  };

  //   简便赋值写法
  const onParamsChange = (obj) => {
    setRotate((prev) => {
      return { ...prev, ...obj };
    });
  };

  //   旋钮 计算移动点与中心点的角度
  const round = () => {
    const { width, height, left, top } = knobRef.current.getBoundingClientRect();

    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
      let rotate = parseInt(angle.toFixed(0)) + 90;
      onParamsChange({ rotate: rotate > 0 ? rotate : rotate + 360 });
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };

  //   拖拽 计算移动点与中心点的距离 2:1换算成角度
  const drag = (e) => {
    const { clientX: x } = e;

    const move = (e) => {
      const { clientX: x1 } = e;
      let deg = (rotate.rotate + (x1 - x) / 2).toFixed(0) % 360;
      onParamsChange({ rotate: deg });
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };

  useEffect(() => {
    // console.log("🚀 ~ file: image-rotate.jsx ~ line 24 ~ Main ~ rotate", rotate);
    onChange(rotate);
  }, [rotate]);

  return (
    <MainStyled>
      <div className="rotate">
        <Row align="middle" justify="space-around" gutter={12}>
          <Col>
            <Space direction="horizontal" className="input" align="center">
              <svg viewBox="0 0 1024 1024" width="22" height="22" className="icon size" onMouseDown={drag}>
                <path
                  d="M563.2 64c254.4896 0 460.8 206.3104 460.8 460.8s-206.3104 460.8-460.8 460.8a459.6736 459.6736 0 0 1-344.0128-154.1888l61.7216-46.2848A382.976 382.976 0 0 0 563.2 908.8c212.0704 0 384-171.9296 384-384 0-212.0704-171.9296-384-384-384-212.0704 0-384 171.9296-384 384 0 3.0976 0.0256 6.1952 0.1024 9.2928l-76.6208-25.7792C111.3856 261.4528 314.2144 64 563.2 64z"
                  fill="#8a8a8a"
                ></path>
                <path
                  d="M218.7264 413.056a38.4 38.4 0 0 1 61.2864 46.1312l-2.3552 3.1232-104.32 124.7744a38.4 38.4 0 0 1-56.2432 2.8928l-2.688-2.8928-104.2944-124.7744a38.4 38.4 0 0 1 56.2432-52.1472l2.6624 2.8928 74.8544 89.5232 74.8544-89.5232z"
                  fill="#8a8a8a"
                ></path>
              </svg>
              <Input bordered={false} placeholder="0" value={rotate.rotate} onChange={onInputChange} />
            </Space>
          </Col>
          <Col>
            <svg
              viewBox="0 0 1024 1024"
              width="24"
              className="icon"
              onClick={() => onParamsChange({ filLeft: !rotate.filLeft, rotate: 0 - rotate.rotate })}
            >
              <path d="M482.133333 938.666667V85.333333h59.733334v853.333334z m83.2-43.733334v-59.733333h100.266667v59.733333h-100.266667z m-362.666666 0a63.573333 63.573333 0 0 1-24.917334-5.034666 64 64 0 0 1-10.88-5.888 64.341333 64.341333 0 0 1-9.472-7.808 64 64 0 0 1-7.808-9.472 64 64 0 0 1-5.888-10.88 63.658667 63.658667 0 0 1-5.034666-24.917334v-618.666666a63.658667 63.658667 0 0 1 5.034666-24.917334 63.616 63.616 0 0 1 5.888-10.88 64.256 64.256 0 0 1 7.808-9.472 64.597333 64.597333 0 0 1 9.472-7.808 64 64 0 0 1 10.88-5.888 63.573333 63.573333 0 0 1 24.917334-5.034666h256v59.733333h-260.266667v627.2h260.266667v59.733333h-256z m522.666666 0v-59.733333h100.266667V723.2h59.733333v107.733333a63.744 63.744 0 0 1-5.034666 24.917334 64 64 0 0 1-5.888 10.88 64 64 0 0 1-7.808 9.472 64.597333 64.597333 0 0 1-9.472 7.808 64.341333 64.341333 0 0 1-10.88 5.888 63.573333 63.573333 0 0 1-24.917334 5.034666z m160-231.466666h-59.733333v-112h59.733333v112z m0-171.733334h-59.733333V379.733333h59.733333v112z m0-171.733333h-59.733333V208H725.333333v-59.733333h96a63.616 63.616 0 0 1 24.917334 5.034666 64 64 0 0 1 10.88 5.888 64.597333 64.597333 0 0 1 9.472 7.808 64 64 0 0 1 7.808 9.472 64.298667 64.298667 0 0 1 5.888 10.88 63.744 63.744 0 0 1 5.034666 24.917334V320z m-320-112v-59.733333h100.266667v59.733333h-100.266667z"></path>
            </svg>
          </Col>
          <Col>
            <svg
              viewBox="0 0 1024 1024"
              width="24"
              className="filp_up"
              onClick={() => onParamsChange({ filpUp: !rotate.filpUp, rotate: 0 - rotate.rotate })}
            >
              <path d="M482.133333 938.666667V85.333333h59.733334v853.333334z m83.2-43.733334v-59.733333h100.266667v59.733333h-100.266667z m-362.666666 0a63.573333 63.573333 0 0 1-24.917334-5.034666 64 64 0 0 1-10.88-5.888 64.341333 64.341333 0 0 1-9.472-7.808 64 64 0 0 1-7.808-9.472 64 64 0 0 1-5.888-10.88 63.658667 63.658667 0 0 1-5.034666-24.917334v-618.666666a63.658667 63.658667 0 0 1 5.034666-24.917334 63.616 63.616 0 0 1 5.888-10.88 64.256 64.256 0 0 1 7.808-9.472 64.597333 64.597333 0 0 1 9.472-7.808 64 64 0 0 1 10.88-5.888 63.573333 63.573333 0 0 1 24.917334-5.034666h256v59.733333h-260.266667v627.2h260.266667v59.733333h-256z m522.666666 0v-59.733333h100.266667V723.2h59.733333v107.733333a63.744 63.744 0 0 1-5.034666 24.917334 64 64 0 0 1-5.888 10.88 64 64 0 0 1-7.808 9.472 64.597333 64.597333 0 0 1-9.472 7.808 64.341333 64.341333 0 0 1-10.88 5.888 63.573333 63.573333 0 0 1-24.917334 5.034666z m160-231.466666h-59.733333v-112h59.733333v112z m0-171.733334h-59.733333V379.733333h59.733333v112z m0-171.733333h-59.733333V208H725.333333v-59.733333h96a63.616 63.616 0 0 1 24.917334 5.034666 64 64 0 0 1 10.88 5.888 64.597333 64.597333 0 0 1 9.472 7.808 64 64 0 0 1 7.808 9.472 64.298667 64.298667 0 0 1 5.888 10.88 63.744 63.744 0 0 1 5.034666 24.917334V320z m-320-112v-59.733333h100.266667v59.733333h-100.266667z"></path>
            </svg>
          </Col>
          <Col>
            <div
              className="knob"
              ref={knobRef}
              onMouseDown={round}
              style={{ transform: `rotate(${rotate.rotate}deg)` }}
            ></div>
          </Col>
        </Row>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  .rotate {
    width: 100%;
    min-width: 320px;
    background-color: #fff;
    padding: 8px 12px;
    border-radius: 12px;
    pointer-events: auto;

    .icon {
      padding-top: 4px;
      cursor: pointer;
    }

    .size {
      cursor: -webkit-image-set(url(data:image/png;base64,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) 2x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAAAh1JREFUWAntVs1KAlEUHrMfshTCcqOr2gSB4EAtAqmgBzDctK5X0McIilqJr2BiqLh05U53av7gWl0bUUm379M7MI0zNdEiqjnwzT3/c++ZmTNHUWxROp0WcDwB9mwFzDotQHXaaDSY5xvkkltZRw6vTOcz5pvXKfS8Tv2zrK9er7MQXmA9lUqRd3FL2m63PR4P5WNgiQyItpcJJy+aM0U9r/f5lfykFLqdU16U8jNW7R2y0k9rKQMWK5XKUywWk6L5kslklGg0ylLzBu8SUF4GdsiA7gHtOfCt3qYSVAceJ5xzcSpgUQE3epYKm9tgd7darV0T/Ts3d7PZvIlEIqLX613BwsbHFuLrdrvXqqoKJL+BbEwOFSiXyx0Fg0ERCAQsQTv9phGz141SqZTlDorF4h3McYB/hThlFTsoFApZyBuAKc1BG0wkEudYQwC/OA2hZDJ5RjtAP0uikV+e0clKb5nIMTgVcCrwFyrAUYBtz4tWeFmr1USn07mgDHA2Ymswgnpvu92+qlargnGUAeZhPtvEgFX2Zg6n4XCY3VH0+30xGAxsoVwuT+I4CsoevoqczDtDxqZHB57EPxwO1zTv8XissZ+uQghlNBopLtf00DKPH4G2p0puijMSW/c+Tp/lI8jn87eQDwDOTlvApg6UqT/kP4P+iKP/PsA8zGd22A+fDQM4Kq7IldPcA8D1FTDSV/2N8Y7sVOCfVuAN1Dnb2sD/QtAAAAAASUVORK5CYII=) 1x) 15 15,auto !important;
    }

    .input {
      width: 120px;
      height: 32px;
      background-color: #0000000b;
      border-radius: 4px;
      padding: 4px 8px;
      display: flex;
      position: relative;

      .ant-input {
        font-size: 13px;
      }

      &:after {
        content: "°";
        color: #8a8a8a;
        font-size: 14px;
        position: absolute;
        right: 6px;
        top: 0px;
      }
    }

    .filp_up {
      margin-top: 4px;
      transform: rotate(90deg);
      cursor: pointer;
    }

    .knob {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid #333;
      position: relative;
      box-shadow: 0 0 4px #e6e6e6;

      &:before {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #666;
        position: absolute;
        top: 4px;
        left: calc(50% - 4px);
        border-radius: 4px;
      }
    }
  }
`;

// 用法
export default function ImageRotate() {
  const [rotate, setRotate] = useState({ rotate: 0, filpUp: false, filLeft: false });

  return (
    <ImageRotateStyled>
      <div className="container">
        <Space direction="vertical" size={40} align="center">
          <div className="rotateBox">
            <img
              src="/images/avatar.png"
              className="avatar"
              style={{
                transform: `rotateX(${rotate.filpUp ? "180" : "0"}deg) rotateY(${
                  rotate.filLeft ? "180" : "0"
                }deg) rotateZ(${rotate.rotate}deg)`,
              }}
            ></img>
          </div>

          <Main init={rotate} onChange={(e) => setRotate(e)}></Main>
        </Space>
      </div>
    </ImageRotateStyled>
  );
}
const ImageRotateStyled = styled.div`
  .container {
    height: 100vh;
    background-color: #efefef;
    user-select: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .rotateBox {
      width: 240px;
      height: 240px;
      transform-style: preserve-3d;
      /* transform-origin: center; */

      .avatar {
        width: 240px;
        height: 240px;
        border-radius: 50%;
      }
    }
  }
`;
