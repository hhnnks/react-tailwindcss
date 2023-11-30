import React from 'react'

import LeftDragItem from './left-dragItem'

const antdComponentList = [
    {
        type: 'Input',
        displayName: '文字输入',
        props: {
            label: 'input',
            name: 'input',
            required: '0',
            disabled: false,
            readOnly: false
        }
    },
    {
        type: 'InputNumber',
        displayName: '数字输入',
        props: {
            label: 'InputNumber',
            name: 'InputNumber',
            required: '0',
            disabled: false,
            readOnly: false
        }
    },
    {
        type: 'Button',
        displayName: '按钮',
        props: {
            label: 'Button'
        }
    },
    {
        type: 'Table',
        displayName: '表格',
        props: {}
    },
    {
        type: 'DatePicker',
        displayName: '日期',
        props: {
            label: 'date',
            name: 'date',
            required: '0',
            disabled: false
        }
    },
    {
        type: 'Radio',
        displayName: '单选',
        props: {
            label: 'radio',
            name: 'radio',
            options: [
                { value: 'option1', label: '选项1' },
                { value: 'option2', label: '选项2' }
            ],
            required: '0',
            disabled: false
        }
    },
    {
        type: 'Select',
        displayName: '下拉框',
        props: {
            label: 'select',
            name: 'select',
            options: [
                { value: 'option1', label: '选项1' },
                { value: 'option2', label: '选项2' }
            ],
            placeholder: '请选择',
            required: '0',
            disabled: false
        }
    },
    {
        type: 'Checkbox',
        displayName: '多选',
        props: {
            label: 'checkbox',
            name: 'checkbox',
            options: [
                { value: 'option1', label: '选项1' },
                { value: 'option2', label: '选项2' }
            ],
            required: '0',
            disabled: false
        }
    },
    {
        type: 'UploadFile',
        displayName: '文件上传',
        props: {
            disabled: true
        }
    },
    {
        type: 'UploadImage',
        displayName: '图片上传',
        props: {
            listType: 'picture-card',
            disabled: true,
            fileList: []
        }
    },
    {
        type: 'Text',
        displayName: '文本文字',
        props: {
            label: 'text',
            name: 'text',
            required: '0',
            disabled: false
        }
    },
    {
        type: 'TextArea',
        displayName: '多行文本',
        props: {
            label: 'TextArea',
            name: 'TextArea',
            required: '0',
            disabled: false
        }
    }
]

function Left() {
    return (
        <div className="left">
            {antdComponentList.map((item) => (
                <LeftDragItem data={item} key={item.type} />
            ))}
        </div>
    )
}

export default Left
