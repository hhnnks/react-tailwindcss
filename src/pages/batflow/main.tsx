import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { CRAD } from './config'
import Item from './main-item'

import { Button, Modal, Input, Select, Form } from 'antd'
import useAppContext from '../context/useContext'
// import previewFields from '../schema/preview'
import { v1 as uuid } from 'uuid'
import { ActionTypes } from '../context/types'
interface DragItem {
    type: string
    data: any
    dragParentId: string
    dragIndex: number
}

const { confirm } = Modal

export default function Main() {
    const [form] = Form.useForm()
    const { state, dispatch } = useAppContext()
    const { children, formContent } = state
    console.log('state111: ', state)

    useEffect(() => {
        dispatch({
            type: ActionTypes.CLEAR
        })
    }, [])

    const [currentSelectFormComponentId, setCurrentSelectFormComponentId] = useState(null)
    const [showTemplateModal, setShowTemplateModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [templateName, setTemplateName] = useState('')
    const [previewMode, setPreviewMode] = useState('pc')

    useEffect(() => {
        if (!Array.isArray(formContent)) return
        // formContent发生改变时，清空codeTree然后重新渲染
        dispatch({
            type: ActionTypes.CLEAR
        })
        if (formContent.length > 0) {
            formContent.forEach((formItem) => {
                dispatch({
                    type: ActionTypes.APPEND,
                    value: formItem
                })
            })
        }
        dispatch({
            type: ActionTypes.SET_THERE,
        })
        
    }, [formContent])

    const [{ canDrop, isOver }, drop] = useDrop<
        DragItem,
        {},
        { canDrop: boolean; isOver: boolean }
    >(() => ({
        accept: CRAD,
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop() // returns false for direct drop target
            if (didDrop) {
                return
            }
            if (item.data.type === 'Template' && item.data.props?.template) {
                const componentContent = item.data.props?.template?.componentContent
                try {
                    const templateComponentList = JSON.parse(componentContent)
                    if (Array.isArray(templateComponentList) && templateComponentList.length > 0) {
                        templateComponentList.forEach((templateComponent) => {
                            dispatch({
                                type: ActionTypes.APPEND,
                                value: templateComponent
                            })
                        })
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                if (!item.data.id) {
                    console.log(!item.data.id, '!item.data.id')
                    console.log(item.data, '!item.data')
                    dispatch({
                        type: ActionTypes.APPEND,
                        value: item.data
                    })
                } else {
                }
            }
            return { name: 'Dustbin' }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver({
                shallow: true
            }),
            canDrop: monitor.canDrop()
        })
    }))

    return (
        <div className="main">
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    padding: 10
                }}
            >
                <div
                    ref={drop}
                    style={{
                        width: previewMode === 'phone' ? 325 : '100%',
                        minHeight: 570,
                        position: 'relative',
                        backgroundColor: '#fff',
                        padding: 20,
                        border: '1px dashed rgb(229, 231, 235)',
                        transition: 'all .3s'
                    }}
                >
                    <Form form={form} layout="horizontal" labelAlign="right">
                        {children?.map((sub: any, index: number) => (
                            <Item
                                data={sub}
                                index={index}
                                key={sub.id}
                                mode={previewMode}
                                parentId={''}
                                form={form}
                            />
                        ))}
                    </Form>
                    <Button
                        onClick={() => {
                            form.submit()
                        }}
                    >
                        submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
