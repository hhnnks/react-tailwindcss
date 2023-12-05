import React, { useEffect, useRef, useState } from 'react'
import { useDrop, useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { Button, Form, Input } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { CRAD } from './config'
import antdComponent from './antdComponent'
import { ActionTypes } from '../context/types'
import useAppContext from '../context/useContext'
interface Props {
    data: any
    parentId: string
    index: number
    mode: string
    form: any
}
interface DragData {
    data: any
    dragIndex: number
    dragParentId: string
}
interface CollectedProps {
    canDrop: boolean
    isOver: boolean
}

function isParentNode(type: string) {
    return ['div', 'Grid', 'Form', 'Form.Item'].indexOf(type) > -1
}

export default function MainItem({ data, parentId, index, mode, form }: Props) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [positionDown, setPosition] = useState(true)
    const { state, dispatch } = useAppContext()

    // 监听数据 赋值form
    //   useEffect(() => {
    //     if (data.children.length > 0) {
    //       const findChild = data.children.find((v: any) => v.id === state.focusId)

    //       if (findChild) {
    //         form.setFieldValue(findChild.props.name, findChild.props.value)
    //       }
    //     }
    //   }, [data])

    //   useEffect(() => {
    //     if (data.children.length > 0) {
    //       const findChild = data.children.find((v: any) => v.id === state.focusId)

    //       if (findChild) {
    //         form.setFieldValue(findChild.props.name, findChild.props.value)
    //       }
    //     }
    //   }, [])

    // 放置
    const [{ canDrop, isOver }, drop] = useDrop<DragData, {}, CollectedProps>(
        () => ({
            //接收对应的对应的拖动标识。
            accept: CRAD,
            // 接受拖动传递过来的数据
            drop: (item, monitor) => {
                console.log(item, monitor)

                if (monitor.didDrop()) {
                    return
                }
                if (!item.data.id) {
                    console.log('走555555')
                    dispatch({
                        type: ActionTypes.APPENDCOM,
                        value: {
                            hoverParentId: parentId,
                            hoverIndex: index,
                            data,
                            item: item.data,
                            positionDown
                        }
                    })
                } else {
                    dispatch({
                        type: ActionTypes.MOVECOM,
                        value: {
                            hoverParentId: parentId,
                            hoverIndex: index,
                            dragParentId: item.dragParentId,
                            dragIndex: item.dragIndex,
                            data,
                            item: item.data,
                            positionDown
                        }
                    })
                }
                return undefined
            },
            hover: (item, monitor) => {
                console.log(item, monitor, 'dfhjrthjfhj')

                const didHover = monitor.isOver({ shallow: true })
                if (didHover && ref.current) {
                    const hoverBoundingRect = ref.current.getBoundingClientRect()
                    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

                    const clientOffset = monitor.getClientOffset()

                    if (clientOffset) {
                        const hoverClientY = clientOffset.y - hoverBoundingRect.top

                        if (hoverClientY <= hoverMiddleY) {
                            setPosition(false)
                        }
                        if (hoverClientY > hoverMiddleY) {
                            setPosition(true)
                        }
                    }
                }
            },
            // 收集拖动事件在放置区的数据。
            // 比如：是否有成功的拖动到放置区上、是否已经开始拖动，距离放置区的坐标等。并且将监听的数据传递到 useDrop 第一个参数来。
            collect: (monitor) => ({
                isOver: monitor.isOver({
                    shallow: true
                }),
                canDrop: monitor.canDrop()
            })
        }),
        [data, parentId, positionDown, index]
    )

    // 拖动
    const [{ isDragging }, drag, connectDragPreview] = useDrag(() => {
        const dragData: DragData = {
            data,
            dragIndex: index,
            dragParentId: parentId
        }
        console.log(dragData, 'dragData')

        return {
            type: CRAD,
            item: dragData,
            collect: (monitor) => ({
                isDragging: monitor.isDragging() // 监听到拖动的状态，并且定义一个 opacity 的属性来代表样式的透明度
            })

            // type: 自定义一个名称。拖动的 type 和放置的 type 保持一致。
            // item:参数传递。拖动时的数据能够传递到放置区。
            // collect: 收集监听整个拖动事件的状态数据，比如是否正在进行拖动、拖动偏移量等数据。可以通过源代码获取完整的数据。
            // end: 拖动结束时执行的方法。
            // canDrag: 指定当前是否允许拖动。若希望始终允许被拖动，则可以忽略此方法。
        }
    }, [data, index, parentId])

    connectDragPreview(getEmptyImage())
    drag(drop(ref))

    // @ts-ignore
    const Template = antdComponent[data.type] as any

    const handleFocus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch({
            type: ActionTypes.SET_FOCUSID,
            value: data.id
        })
    }
    const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch({
            type: ActionTypes.REMOVECOM,
            value: {
                parentId,
                id: data.id
            }
        })
    }

    let className = 'canvas-item-wrapper'
    const classNameObj: any = {
        isDragging: isDragging
        // isFocus: state.focusId === data.id,
    }
    Object.keys(classNameObj).forEach((classNameKey) => {
        if (classNameObj[classNameKey]) {
            className += ` ${classNameKey}`
        }
    })

    const action = (
        <span
            onClick={handleRemove}
            style={{
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 10,
                color: 'white',
                width: 24,
                height: 24,
                padding: '1px 2px',
                backgroundColor: '#357acd',
                opacity: '0.75',
                cursor: 'pointer'
            }}
        >
            <svg
                className="w-4 h-4 bg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
            </svg>
        </span>
    )

    const showLabel = (type: string) => {
        const hideLabelTypeList = ['Table']

        return hideLabelTypeList.find((hideType) => hideType === type) ? false : true
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>点击上传</div>
        </div>
    )

    return (
        <div
            className={className}
            onClick={handleFocus}
            ref={ref}
            style={{
                marginBottom: 16,
                position: 'relative'
            }}
        >
            {isOver && canDrop && !positionDown ? (
                <div
                    style={{
                        border: '1px solid rgb(79 70 229)'
                    }}
                />
            ) : null}
            {data.type === 'Table' ? (
                <div
                    style={{
                        fontWeight: 'bold',
                        paddingLeft: 4,
                        marginBottom: 4
                    }}
                >
                    {data.props?.label}
                </div>
            ) : null}
            {Template ? (
                <div
                    style={{
                        display: data.type !== 'Table' ? 'flex' : '',
                        // @ts-ignore
                        flexDirection: mode === 'phone' ? 'column' : ''
                    }}
                >
                    <Form.Item
                        name={data.props?.name}
                        label={data.props?.label}
                        rules={
                            data.props.required == '1'
                                ? [{ required: true, message: '请输入' }]
                                : [{ required: false }]
                        }
                    >
                        <Template
                            // {...data.props}
                            value={data.props.value}
                            style={{
                                minWidth: 150
                            }}
                        >
                            {data.type === 'UploadImage' ? (
                                uploadButton
                            ) : data.type === 'UploadFile' ? (
                                <Button icon={<UploadOutlined />}>选择文件</Button>
                            ) : !isParentNode(data.type) ? (
                                (data.props || {}).children
                            ) : (
                                data?.children &&
                                data?.children?.map((sub: any, index: number) => {
                                    console.log(sub, index, '11111')

                                    return (
                                        <MainItem
                                            data={sub}
                                            index={index}
                                            key={sub.id}
                                            mode={mode}
                                            form={form}
                                            parentId={data.id}
                                        />
                                    )
                                })
                            )}
                        </Template>
                    </Form.Item>
                </div>
            ) : null}
            {isOver && canDrop && positionDown ? (
                <div
                    style={{
                        border: '1px solid rgb(79 70 229)'
                    }}
                />
            ) : null}
        </div>
    )
}
