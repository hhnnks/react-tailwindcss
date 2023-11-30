import { v1 as uuid } from 'uuid'

// {
//     "Gridbox__projectName": "111",
//     "Gridbox__projectStr": "222",
//     "Gridbox__sex": "333",
//     "Gridbox2__projectName": "444",
//     "Gridbox2__projectStr": "555",
//     "Gridbox2__sex": "666"
// }

// {
//     Gridbox:{
//         projectName:'111',
//         projectStr:'222',
//         sex:'333',
//     },
//     Gridbox2:{
//         projectName:'444',
//         projectStr:'555',
//         sex:'666',
//     }
// }

const data = [
    {
        type: 'Gridbox',
        displayName: '项目信息',
        name: '项目信息',
        props: {
            // label: '项目信息',
            value: '项目信息'
        },
        children: [
            {
                label: '项目名称',
                props: {
                    placeholder: '请输入',
                    label: '项目名称',
                    name: 'projectName',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectName',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目简称',
                props: {
                    placeholder: '请输入',
                    label: '项目简称',
                    name: 'projectStr',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectStr',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目编号',
                props: {
                    placeholder: '请输入',
                    label: '项目编号',
                    name: 'projectCode',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'sex',
                type: 'Input',
                id: uuid()
            }
        ]
    },
    {
        type: 'Gridbox2',
        displayName: '项目信息2',
        name: '项目信息',
        props: {
            // label: '项目信息',
            value: '项目信息'
        },
        children: [
            {
                label: '项目名称',
                props: {
                    placeholder: '请输入',
                    label: '项目名称',
                    name: 'projectName',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectName',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目简称',
                props: {
                    placeholder: '请输入',
                    label: '项目简称',
                    name: 'projectStr',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectStr',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目编号',
                props: {
                    placeholder: '请输入',
                    label: '项目编号',
                    name: 'projectCode',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'sex',
                type: 'Input',
                id: uuid()
            }
        ]
    },
    {
        type: 'Gridbox3',
        displayName: '项目信息2',
        name: '项目信息',
        props: {
            // label: '项目信息',
            value: '项目信息'
        },
        children: [
            {
                label: '项目名称',
                props: {
                    placeholder: '请输入',
                    label: '项目名称',
                    name: 'projectName',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectName',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目简称',
                props: {
                    placeholder: '请输入',
                    label: '项目简称',
                    name: 'projectStr',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'projectStr',
                type: 'Input',
                id: uuid()
            },
            {
                label: '项目编号',
                props: {
                    placeholder: '请输入',
                    label: '项目编号',
                    name: 'projectCode',
                    required: false,
                    disabled: false,
                    readOnly: false
                },
                children: [],
                name: 'sex',
                type: 'Input',
                id: uuid()
            }
        ]
    }
]

export default data
