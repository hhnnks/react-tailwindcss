import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Layout, Menu } from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout

function Base() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <LayoutContainer className="h-[100%]">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1'
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2'
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3'
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 4 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed)
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: 10,
                        padding: 10,
                        minHeight: 280
                    }}
                >
                    Content
                </Content>
            </Layout>
        </LayoutContainer>
    )
}

export default Base

const LayoutContainer = styled(Layout)`
    .trigger {
        padding: 0 24px;
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
        font-size: 22px;
    }

    .trigger:hover {
        color: #1890ff;
    }

    .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
    }

    .site-layout .site-layout-background {
        background: #fff;
    }
`
