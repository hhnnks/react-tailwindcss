import React from 'react'
import { styled } from 'styled-components'
import { getList } from '@/api/jsonServer'

export default class ClassEditTable extends React.Component<React.ReactElement> {
    componentDidMount() {
        this.fatchList()
    }

    fatchList = async () => {
        const { data } = await getList()
    }

    makeEditable(tableId: any, config: any) {
        // 默认配置
        const defaultConfig = {
            editableColumns: [], // 可编辑列的下标（从 0 开始）
            validationRules: {}, // 验证规则
            style: {} // 样式
        }
        let obj = { a: 1, b: 2 }
        // 合并配置
        const mergedConfig = Object.assign(defaultConfig, config)
        // 获取表格元素
        const table = document.getElementById(tableId) as any
        // 获取表头和表体
        const thead = table.querySelector('thead')
        const tbody = table.querySelector('tbody')
        // 获取所有可编辑单元格
        const editableCells = Array.from(tbody.querySelectorAll('.editable'))
        // 为每个可编辑单元格添加 click 事件监听器
        editableCells.forEach((cell: any) => {
            cell.addEventListener('click', () => {
                // 获取单元格中的原数据
                const originalData = cell.textContent
                // 创建一个文本框
                const input = document.createElement('input')
                // 设置文本框的初始值为原数据
                input.value = originalData
                // 将文本框插入到单元格中
                cell.textContent = ''
                cell.appendChild(input)
                // 设置文本框的样式
                Object.assign(input.style, mergedConfig.style.input)
                // 为文本框添加 blur 事件监听器
                input.addEventListener('blur', () => {
                    // 获取文本框中的新数据
                    const newData = input.value
                    // 获取单元格的下标
                    const cellIndex = Array.from(cell.parentElement.children).indexOf(cell)
                    // 判断单元格是否可编辑
                    if (mergedConfig.editableColumns.includes(cellIndex)) {
                        // 获取验证规则
                        const validationRule = mergedConfig.validationRules[cellIndex]
                        // 验证新数据是否符合规则
                        if (validationRule && !validationRule.test(newData)) {
                            // 不符合规则，给出提示
                            alert('输入的数据不符合要求，请重新输入！')
                            // 保留文本框
                            input.focus()
                        } else {
                            // 符合规则，更新单元格中的数据
                            cell.textContent = newData
                        }
                    } else {
                        // 单元格不可编辑，直接更新数据
                        cell.textContent = newData
                    }
                })
                // 让文本框获得焦点
                input.focus()
            })
        })
    }

    render() {
        return (
            <ClassEditTableContainer className="class-table">
                <div className="bbx"></div>
                {/* <table>
            <thead>
                <th>标题1</th>
                <th>标题2</th>
                <th>标题3</th>
                <th>标题4</th>
            </thead>
            <tbody>
                <tr>
                    <td>td1</td>
                    <td>td2</td>
                    <td>td3</td>
                    <td>td4</td>
                </tr>
            </tbody>
        </table> */}

                <div className="box border border-green-500  w-10 h-10 flex justify-center al align-bottom border-spacing-7 bg-red-300 hover:text-green-500">
                    box
                </div>

                <div
                    className="w-10 h-10 flex justify-center align-bottom text-red-500 bg-green-300 hover:text-red-200"
                    aria-current
                >
                    button
                </div>

                <table id="editable-table">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>邮箱</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                className="editable"
                                suppressContentEditableWarning
                                contentEditable={true}
                            >
                                张三
                            </td>
                            <td className="editable">18</td>
                            <td>男</td>
                            <td className="editable">zhangsan@example.com</td>
                        </tr>
                        <tr>
                            <td className="editable">李四</td>
                            <td className="editable">20</td>
                            <td>女</td>
                            <td className="editable">lisi@example.com</td>
                        </tr>
                        <tr>
                            <td className="editable">王五</td>
                            <td className="editable">22</td>
                            <td>男</td>
                            <td className="editable">wangwu@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </ClassEditTableContainer>
        )
    }
}

const ClassEditTableContainer = styled.div`
    width: 100%;
    table {
        width: 500px;
        border-collapse: collapse;
    }
    th,
    td {
        border: 1px solid black;
        padding: 5px;
        text-align: left;
    }

    td:focus {
        outline: none;
        border: 1px solid #333;
        color: #333;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
        background-color: #f2f2f2;
    }
`
