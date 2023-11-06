import React, { useCallback, useEffect, useRef, useState } from "react";
import { Row, Col, Button, Typography, Space } from "antd";
const { Title, Text } = Typography;
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function AnimateIcon() {
  return (
    <AnimateIconStyled>
      <div className="icon"></div>
    </AnimateIconStyled>
  );
}

const AnimateIconStyled = styled.div`
  padding: 40px;
  
  .icon {
    width: 64px;
    height: 64px;
    background-image: url("/images/animate-icon/longIcon.png");
    background-size: cover;
    background-position-y: 0px;
    animation: back 1s steps(20) 0s 1 forwards;

    @keyframes back {
      100% {
        background-position-y: 0px;
      }
    }

    &:hover {
      animation: icon 1s steps(20) 0s 1 forwards;

      @keyframes icon {
        0% {
          background-position-y: 0px;
        }
        100% {
          background-position-y: -1280px;
        }
      }
    }
  }
`;
