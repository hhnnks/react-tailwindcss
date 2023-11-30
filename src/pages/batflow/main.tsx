import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { CRAD } from './config'
import Item from './main-item'

import { Button, Modal, Input, Select, Form } from 'antd'

// import previewFields from '../schema/preview'
import { v1 as uuid } from 'uuid'

interface DragItem {
  type: string
  data: any
  dragParentId: string
  dragIndex: number
}

const { confirm } = Modal


const children=[
    {
        "value": "客户信息",
        "type": "Text",
        "props": {
            "name": "9ce79eb1-8f43-11ee-985c-010286d1c33e",
            "value": "客户信息"
        },
        "children": [],
        "id": "5d8b83f0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Radio",
        "props": {
            "label": "客户性质",
            "name": "9ce79eb2-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "key": 2,
                    "label": "新客户",
                    "value": "1"
                },
                {
                    "key": 3,
                    "label": "老客户",
                    "value": "2"
                }
            ]
        },
        "children": [],
        "id": "5d8bd210-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "企业全名/注册号/统一社会信用代码",
            "name": "9ce79eb3-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d8c4740-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "客户信息",
            "name": "9ce79eb4-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d8ce380-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "所属证监局",
            "name": "9ce79eb5-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d8d31a0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "股票代码",
            "name": "9ce79eb6-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d8d7fc0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "证监会行业标准",
            "name": "9ce79eb7-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d8e4310-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "国民经济行业标转",
            "name": "9ce79eb8-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d8eb840-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "股票名称",
            "name": "9ce79eb9-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d8f2d70-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "客户类型",
            "name": "9ce79eba-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d8fa2a0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "统一社会信用代码",
            "name": "9ce79ebb-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d8ff0c0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "总股本（注册资本）",
            "name": "9ce79ebc-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d903ee0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "注册资本金币种",
            "name": "9ce79ebd-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d908d00-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "行业排名",
            "name": "9ce79ebe-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d90db20-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "主要经营范围",
            "name": "9ce79ebf-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d912940-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "主要产品",
            "name": "9ce79ec0-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d919e70-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "股权结构",
            "name": "9ce79ec1-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d91ec90-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "UploadFile",
        "props": {
            "label": "诚信档案",
            "name": "9ce79ec2-8f43-11ee-985c-010286d1c33e",
            "disabled": true
        },
        "children": [],
        "id": "5d923ab0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "注册地址",
            "name": "9ce79ec3-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d92afe0-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Input",
        "props": {
            "label": "注册地址邮编",
            "name": "9ce79ec4-8f43-11ee-985c-010286d1c33e"
        },
        "children": [],
        "id": "5d92fe00-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "注册地址所属省份",
            "name": "9ce79ec5-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d937330-8f64-11ee-bc81-699aa248d0c6"
    },
    {
        "type": "Select",
        "props": {
            "label": "注册地址所属地级市",
            "name": "9ce79ec6-8f43-11ee-985c-010286d1c33e",
            "options": [
                {
                    "value": "option1",
                    "label": "选项1"
                },
                {
                    "value": "option2",
                    "label": "选项2"
                }
            ],
            "placeholder": "请选择"
        },
        "children": [],
        "id": "5d93c150-8f64-11ee-bc81-699aa248d0c6"
    }
]




export default function Main() {
  const [form] = Form.useForm();



  const [currentSelectFormComponentId, setCurrentSelectFormComponentId] =
    useState(null)
  const [showTemplateModal, setShowTemplateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [templateName, setTemplateName] = useState('')
  const [previewMode, setPreviewMode] = useState('pc')


//   useEffect(() => {
//     if (!Array.isArray(formContent)) return
//     // formContent发生改变时，清空codeTree然后重新渲染
//     dispatch(clear())
//     if (formContent.length > 0) {
//       formContent.forEach((formItem) => {
//         const { key, name, type, children, props, ...rest } = formItem
//         dispatch(
//           append({
//             ...rest,
//             type,
//             props: {
//               label: name,
//               name: key,
//               ...props,
//             },
//             children,
//           })
//         )
//       })
//     }
//   }, [formContent, cflowId])

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
          if (
            Array.isArray(templateComponentList) &&
            templateComponentList.length > 0
          ) {
            templateComponentList.forEach((templateComponent) => {

            })
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        if (!item.data.id) {
          console.log(!item.data.id, '!item.data.id');
          console.log(item.data, '!item.data');

        } else {
         
        }
      }
      return { name: 'Dustbin' }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div className="main">
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.05)',
          padding: 10,
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
            transition: 'all .3s',
          }}
        >

          <Form form={form} layout="horizontal" labelAlign="right">

            {children.map((sub: any, index: number) => (
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
          <Button onClick={() => {
            form.submit()
          }}>
            submit
          </Button>
        </div>
      </div>
    </div >
  )
}
