import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

import App from '@/App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';

// ! rem start
// import "amfe-flexible/index.js";
// ! rem end

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn')
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ConfigProvider locale={zhCN}>
        <Router>
            <App />
        </Router>
    </ConfigProvider>
)
