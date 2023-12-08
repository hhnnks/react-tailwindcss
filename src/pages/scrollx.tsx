import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Row, Col, Button, Typography, Space } from 'antd'
const { Title, Text } = Typography
// import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styled from 'styled-components'

function Scroll({ ScrollBox, move }: { ScrollBox: any; move?: number }) {
    const [scroll, setScroll] = useState(0) // 当前滚到哪了
    const [maxVal, setMaxVal] = useState(0) // 最大滚到哪
    const moveX = useRef(move || 0) // 每次点击的滚多少 默认滚动一半

    const scrollBoxRef = useRef<any>(null)
    const scrollRef = useRef<any>(null)

    useEffect(() => {
        const { width: wsb } = scrollBoxRef.current.getBoundingClientRect() // 获取滚动内容的宽度 1360px
        const { width: ws } = scrollRef.current.getBoundingClientRect() // 获取滚动区域的宽度 680px
        setMaxVal(ws - wsb) // 最大滚动值 680-1360

        move && move > 0 ? '' : (moveX.current = ws / 2) // 默认为滚动区域的一半 680/2
    }, [])

    const toLeft = useCallback(() => {
        setScroll((prev) => {
            const next = prev + moveX.current
            return next >= 0 ? 0 : next
        })
    }, [moveX.current])

    const toRight = useCallback(() => {
        setScroll((prev) => {
            const next = prev - moveX.current
            return next <= maxVal ? maxVal : next
        })
    }, [maxVal, moveX.current])

    return (
        <ScrollStyled>
            <div className="scroll" ref={scrollRef}>
                <Button
                    shape="circle"
                    className="leftScrollBtn"
                    onClick={toLeft}
                    style={{ visibility: `${scroll == 0 ? 'hidden' : 'visible'}` }}
                >
                    {/* <LeftOutlined /> */}
                </Button>

                <Button
                    shape="circle"
                    className="rightScrollBtn"
                    onClick={toRight}
                    style={{ visibility: `${scroll <= maxVal ? 'hidden' : 'visible'}` }}
                >
                    {/* <RightOutlined /> */}
                </Button>

                <div style={{ overflow: 'hidden' }}>
                    <div style={{ transform: `translateX(${scroll}px)`, transition: 'all 0.4s' }}>
                        <div style={{ float: 'left' }} ref={scrollBoxRef}>
                            <ScrollBox />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollStyled>
    )
}
const ScrollStyled = styled.div`
    .scroll {
        width: 100%;
        position: relative;

        .leftScrollBtn {
            position: absolute;
            left: -16px;
            bottom: 33%;
            z-index: 2;
        }
        .rightScrollBtn {
            position: absolute;
            right: -16px;
            bottom: 30%;
            z-index: 2;
        }

        .ant-btn:hover,
        .ant-btn:focus {
            color: #ff7c33;
            border-color: #ff7c33;
            background: #fff;
        }
    }
`

// 用法
export default function ScrollPage() {
    const [tabIndex, setTabIndex] = useState(1)
    const [selected, setSelected] = useState('')

    const ScrollBox = useCallback(() => {
        return (
            <Row style={{ flexWrap: 'nowrap' }}>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item, k) => {
                    return (
                        <Col key={k}>
                            <div
                                className={item == selected ? 'item active' : 'item'}
                                onClick={() => setSelected(item)}
                            >
                                {item}
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }, [selected])

    const ScrollImage = useCallback(() => {
        return <img src="/images/cover/long-picture.jpg" style={{ height: '320px' }} />
    }, [])

    return (
        <PageStyled>
            <div className="container">
                <TabStyled>
                    <Row>
                        <Col>
                            <div
                                className={
                                    tabIndex == 1
                                        ? `tab-left-active tab-item`
                                        : `tab-left-default tab-item`
                                }
                                onClick={() => setTabIndex(1)}
                            >
                                <div className="text">选择色块滚动</div>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className={
                                    tabIndex == 2
                                        ? `tab-right-active tab-item`
                                        : `tab-right-default tab-item`
                                }
                                onClick={() => setTabIndex(2)}
                            >
                                <div className="text">图片滚动</div>
                            </div>
                        </Col>
                    </Row>
                </TabStyled>

                {tabIndex == 1 && (
                    <div className="tabItem">
                        <div className="scrollWidth">
                            <Scroll ScrollBox={ScrollBox}></Scroll>
                        </div>
                    </div>
                )}
                {tabIndex == 2 && (
                    <div className="tabItem">
                        <div className="scrollWidth">
                            <Scroll ScrollBox={ScrollImage} move={400}></Scroll>
                        </div>
                    </div>
                )}
            </div>
        </PageStyled>
    )
}

const PageStyled = styled.div`
    height: 100vh;
    font-family: 'Alimama_ShuHeiTi_Bold';
    text-align: center;
    position: relative;
    user-select: none;
    background-color: #333;

    .container {
        width: 760px;
        margin: 0 auto;

        .tabItem {
            width: 100%;
            height: 400px;
            background-color: #ffff;
            border-radius: 0px 16px 16px 16px;
            padding: 40px;

            .scrollWidth {
                width: 680px;

                .item {
                    width: 160px;
                    height: 130px;
                    border: 1px solid #d9d9d9;
                    border-radius: 6px;
                    text-align: center;
                    padding-top: 30px;
                    margin: 5px;

                    font-size: 40px;
                    color: #383838;
                    background-color: #fff;
                    cursor: pointer;

                    /* &:hover {
            background-color: #ff7a3310;
            border-color: #ff7c33;
          } */
                }

                .active {
                    background-color: #ff7a3310;
                    border-color: #ff7c33;
                }
            }
        }
    }
`

const TabStyled = styled.div`
    width: 100%;
    padding-top: 130px;
    margin: 0px auto;
    user-select: none;

    .tab-item {
        width: 240px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .tab-left-active {
        background-color: #fff;
        border-radius: 16px 16px 0px 0px;
        color: #666;
    }

    .tab-right-default {
        background-color: #fff;
        border-radius: 24px 24px 0px 0px;

        .text {
            width: 240px;
            height: 50px;
            background-color: #4d4d4d;
            border: 1px solid #4d4d4d;
            border-radius: 16px 16px 0px 14px;
            position: absolute;
            top: 0px;
            left: 0px;
            color: #999999;
            cursor: pointer;
        }
    }

    .tab-right-active {
        background-color: #fff;
        border-radius: 16px 16px 0px 0px;
        color: #666;
    }

    .tab-left-default {
        background-color: #fff;
        border-radius: 24px 24px 0px 24px;

        .text {
            width: 240px;
            height: 50px;
            background-color: #4d4d4d;
            border: 1px solid #4d4d4d;
            border-radius: 16px 16px 16px 0px;
            position: absolute;
            top: 0px;
            left: 0px;
            color: #999999;
            cursor: pointer;
        }
    }
`
