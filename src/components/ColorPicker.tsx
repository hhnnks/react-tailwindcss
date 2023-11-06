import { useState } from 'react'
import styled from 'styled-components'

import { Outlet } from 'react-router-dom'
import { Col, Row, Space } from 'antd'
import { AnyAaaaRecord } from 'dns'
// import Menu from "../comp/menu";

const colorList = [
    'FF6900',
    'FCB900',
    '7BDCB5',
    '00D084',
    '8ED1FC',
    '0693E3',
    'ABB8C3',
    'EB144C',
    'F78DA7',
    '9900EF'
]

function ColorPicker({ onChange }: { onChange: any }) {
    const [color, setColor] = useState('383838')

    const handleClick = (color: any) => {
        setColor(color)
        onChange('#' + color)
    }

    return (
        <ColorPickerStyled>
            <Row gutter={6}>
                {colorList.map((item, index) => (
                    <Col key={index}>
                        <div
                            className="item"
                            style={{ backgroundColor: `#${item}` }}
                            onClick={() => handleClick(item)}
                        ></div>
                    </Col>
                ))}
                <Col>
                    <Row gutter={0}>
                        <div className="item prefix">#</div>
                        <input
                            type="text"
                            className="input"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </Row>
                </Col>
            </Row>
        </ColorPickerStyled>
    )
}

export default ColorPicker

const ColorPickerStyled = styled.div`
    width: 276px;

    .item {
        height: 30px;
        width: 30px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 6px;
    }

    .one {
        background: #ff6900;
    }

    .two {
        background: #fcb900;
    }

    .three {
        background: #7bdcb5;
    }

    .four {
        background: #00d084;
    }

    .five {
        background: #8ed1fc;
    }

    .six {
        background: #0693e3;
    }

    .seven {
        background: #abb8c3;
    }

    .eight {
        background: #eb144c;
    }

    .nine {
        background: #f78da7;
    }

    .ten {
        background: #9900ef;
    }

    .customize {
        display: flex;
    }

    .prefix {
        background: rgb(240, 240, 240);
        border-radius: 4px 0px 0px 4px;
        color: rgb(152, 161, 164);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input {
        width: 108px;
        font-size: 14px;
        color: rgb(102, 102, 102);
        border: 0px;
        outline: none;
        height: 30px;
        box-shadow: rgb(240 240 240) 0px 0px 0px 1px inset;
        border-radius: 0px 4px 4px 0px;
        float: left;
        padding-left: 8px;
    }
`
