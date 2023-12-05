import { v1 as uuid } from 'uuid'
import { UpdateAction, ActionTypes } from './types'

function isNameRepeated(name: string, array: Array<any>) {
    const findItem = array.find((item) => item?.props?.name === name)
    return findItem ? true : false
}
function isParentNode(type: string) {
    return ['div', 'Grid', 'Form', 'Form.Item'].indexOf(type) > -1
}

export const traverse = <T extends { children?: T[] }>(
    data: T,
    // eslint-disable-next-line no-unused-vars
    fn: (param: T) => boolean
) => {
    if (fn(data) === false) {
        return false
    }

    if (data && data.children) {
        for (let i = data.children.length - 1; i >= 0; i--) {
            if (!traverse(data.children[i], fn)) return false
        }
    }
    return true
}

export const initState: any = {
    theme: 'green',
    focusId: null,
    children: [],
    formContent: [
        {
            value: '客户信息',
            type: 'Text',
            props: {
                name: '9ce79eb1-8f43-11ee-985c-010286d1c33e',
                value: '客户信息'
            },
            children: [],
            id: '5d8b83f0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Radio',
            props: {
                label: '客户性质',
                name: '9ce79eb2-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        key: 2,
                        label: '新客户',
                        value: '1'
                    },
                    {
                        key: 3,
                        label: '老客户',
                        value: '2'
                    }
                ]
            },
            children: [],
            id: '5d8bd210-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '企业全名/注册号/统一社会信用代码',
                name: '9ce79eb3-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d8c4740-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '客户信息',
                name: '9ce79eb4-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d8ce380-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '所属证监局',
                name: '9ce79eb5-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d8d31a0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '股票代码',
                name: '9ce79eb6-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d8d7fc0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '证监会行业标准',
                name: '9ce79eb7-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d8e4310-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '国民经济行业标转',
                name: '9ce79eb8-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d8eb840-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '股票名称',
                name: '9ce79eb9-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d8f2d70-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '客户类型',
                name: '9ce79eba-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d8fa2a0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '统一社会信用代码',
                name: '9ce79ebb-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d8ff0c0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '总股本（注册资本）',
                name: '9ce79ebc-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d903ee0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '注册资本金币种',
                name: '9ce79ebd-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d908d00-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '行业排名',
                name: '9ce79ebe-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d90db20-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '主要经营范围',
                name: '9ce79ebf-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d912940-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '主要产品',
                name: '9ce79ec0-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d919e70-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '股权结构',
                name: '9ce79ec1-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d91ec90-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'UploadFile',
            props: {
                label: '诚信档案',
                name: '9ce79ec2-8f43-11ee-985c-010286d1c33e',
                disabled: true
            },
            children: [],
            id: '5d923ab0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '注册地址',
                name: '9ce79ec3-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d92afe0-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Input',
            props: {
                label: '注册地址邮编',
                name: '9ce79ec4-8f43-11ee-985c-010286d1c33e'
            },
            children: [],
            id: '5d92fe00-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '注册地址所属省份',
                name: '9ce79ec5-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d937330-8f64-11ee-bc81-699aa248d0c6'
        },
        {
            type: 'Select',
            props: {
                label: '注册地址所属地级市',
                name: '9ce79ec6-8f43-11ee-985c-010286d1c33e',
                options: [
                    {
                        value: 'option1',
                        label: '选项1'
                    },
                    {
                        value: 'option2',
                        label: '选项2'
                    }
                ],
                placeholder: '请选择'
            },
            children: [],
            id: '5d93c150-8f64-11ee-bc81-699aa248d0c6'
        }
    ]
}

export const reducer = (state = initState, action: UpdateAction<ActionTypes>) => {
    console.log('action: ', action)
    switch (action.type) {
        case ActionTypes.SET_THERE:
            return {
                ...state,
                theme: action.value
            }
        case ActionTypes.SET_FOCUSID:
            return {
                ...state,
                focusId: action.value
            }
        case ActionTypes.CLEAR:
            return {
                ...state,
                children: []
            }
        case ActionTypes.APPEND: {
            const focusId = uuid()

            const name = action?.value?.props?.name
            if (name && isNameRepeated(name, state.children)) return
            return {
                ...state,
                focusId,
                children: [...state.children, { ...action.value, focusId }]
            }
        }

        case ActionTypes.UPDATE:
            return {
                ...state,
                [action.field]: action.value
            }
        case ActionTypes.APPENDCOM: {
            const { data, item, hoverParentId, hoverIndex, positionDown } = action.value

            const focusId = uuid()

            traverse(state, (sub) => {
                //非嵌套标签往父层插入
                if (!isParentNode(data.type) && sub.id === hoverParentId) {
                    if (positionDown) {
                        sub.children.splice(hoverIndex + 1, 0, { ...item, id: focusId })
                    } else {
                        sub.children.splice(hoverIndex, 0, { ...item, id: focusId })
                    }
                    return false
                }
                if (isParentNode(data.type) && sub.id === data.id) {
                    if (sub.children && sub.children.length > 0) {
                        sub.children.push({
                            ...item,
                            id: focusId
                        })
                    } else {
                        sub.children = [{ ...item, id: focusId }]
                    }

                    return false
                }
                return true
            })
            return {
                ...state,
                focusId
            }
        }

        case ActionTypes.MOVECOM: {
            const {
                data: hoverData,
                item: dragData,
                hoverParentId: hId,
                hoverIndex: hIndex,
                dragParentId,
                dragIndex,
                positionDown
            } = action.value

            if (hoverData.id === dragData.id) return state
            //在子节点中不拖拽
            let hoverInDragData = false

            traverse(dragData, (sub) => {
                if (sub.id === hoverData.id) {
                    hoverInDragData = true
                    return false
                }
                return true
            })

            if (hoverInDragData) return state

            const focusId = uuid()

            traverse(state, (sub) => {
                if (sub.id === dragParentId) {
                    sub.children.splice(dragIndex, 1)
                    return false
                }
                return true
            })

            traverse(state, (sub) => {
                if (!isParentNode(hoverData.type) && sub.id === hId) {
                    if (positionDown) {
                        sub.children.splice(hIndex + 1, 0, { ...dragData, id: focusId })
                    } else {
                        sub.children.splice(hIndex, 0, { ...dragData, id: focusId })
                    }
                    return false
                }
                //非嵌套标签往父层插入
                if (isParentNode(hoverData.type) && sub.id === hoverData.id) {
                    if (sub.children) {
                        sub.children.unshift({
                            ...dragData,
                            id: focusId
                        })
                    } else {
                        sub.children = [{ ...dragData, id: focusId }]
                    }
                    return false
                }
                return true
            })
            return {
                ...state,
                focusId
            }
        }

        case ActionTypes.UPDATE: {
            const { id, parentId } = action.value
            traverse(state, (sub) => {
                if (sub.id === parentId) {
                    sub.children = sub.children.filter((child: any) => child.id !== id)
                    return false
                }
                return true
            })
            return {
                ...state
            }
        }
        default:
            throw new Error()
    }
}
