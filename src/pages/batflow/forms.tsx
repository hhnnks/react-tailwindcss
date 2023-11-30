import React from 'react'
import { Form, Input, Button } from 'antd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import data from './json'

function Batflow() {
    const [form] = Form.useForm()

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

    return (
        <div>
            <Form form={form}>
                {data.map((item) => {
                    return (
                        <div key={item.type}>
                            <h3>{item.displayName + '===' + item.type}</h3>
                            <div className="content" style={{ margin: '40px' }}>
                                {item.children.map((k) => {
                                    return (
                                        <Form.Item
                                            key={k.id}
                                            name={`${item.type}__${k.name}`}
                                            label={k.label}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!'
                                                }
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Form>

            <Button onClick={handleOk}>submit</Button>
        </div>
    )
}

export default Batflow
