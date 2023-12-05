import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Row, Col, InputNumber, Select } from 'antd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import data from './json'
import { kMaxLength } from 'buffer'
const style: React.CSSProperties = { background: '#fff', padding: '8px 0' }

const antds: any = {
    Input,
    Select
}

function Batflow() {
    const [form] = Form.useForm()
    const [formSelectList, setFormSelectList] = useState<any>({})

    const apis = {
        projectId1: axios.get('http://localhost:3300/list1').then((res) => res.data),
        projectId2: axios.get('http://localhost:3300/list2').then((res) => res.data),
        projectId3: axios.get('http://localhost:3300/list3').then((res) => res.data),
        projectId4: axios.get('http://localhost:3300/list3').then((res) => res.data),
    }

    function func(array: any, apisKeys: any) {
        console.log('array,apisKeys: ', array, apisKeys)
        console.log('func')

        apisKeys.forEach((item: any, ind: any) => {
            setFormSelectList((state: any) => ({ ...state, [item]: array[ind] }))
        })
    }

    useEffect(() => {
        Promise.allSettled(Object.values(apis))
            .then((res) => {
                func(res, Object.keys(apis))
                console.log(res, 'res')
            })
            .catch((err) => {
                console.log(err, 'err')
            })
    }, [])

    const handleOk = () => {
        form.validateFields()
            .then((values: any) => {
                const res = convertObject(values)
            })
            .catch((error: any) => {})
    }

    function convertObject(obj: any) {
        const result: any = {}
        for (const key in obj) {
            const parts = key.split('__')
            const value = obj[key]
            result[parts[0]] = {
                ...result[parts[0]],
                [parts[1]]: value
            }
        }
        return result
    }

    useEffect(() => {
        console.log(formSelectList, 'formSelectList')
    }, [formSelectList])

    const render = (data: any) => {
        console.log(data, 'data')
        const Template = antds[data.type]
        console.log(formSelectList[data.name]?.value, 'formSelectList1')

        return (
            <Template
                options={Object.keys(formSelectList) ? formSelectList[data.name]?.value : []}
            />
        )
    }

    return (
        <div>
            <Form
                form={form}
                labelCol={{ span: 6 }}
                labelAlign="right"
                labelWrap
                wrapperCol={{ flex: 1 }}
            >
                {data.map((item) => {
                    return (
                        <Row key={item.type}>
                            <Col span={24}>
                                <h3>{item.displayName + '===' + item.type}</h3>
                                <Row>
                                    {item.children.map((k) => {
                                        if (k.props.readOnly) return ''

                                        return (
                                            <Col
                                                className="gutter-row"
                                                span={6}
                                                style={style}
                                                key={k.id}
                                            >
                                                <Form.Item
                                                    label={k.props.label}
                                                    name={k.props.name}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '请输入'
                                                        }
                                                    ]}
                                                >
                                                    {render(k)}
                                                </Form.Item>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    )
                })}
            </Form>

            <Button onClick={handleOk}>submit</Button>
        </div>
    )
}

export default Batflow
