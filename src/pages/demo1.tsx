/*
 * @Descripttion: 测试根据版本好 模板类型获取模板
 * @Date: 2023-12-28 16:37:36
 * @LastEditTime: 2023-12-29 09:32:11
 */

import React, { useEffect } from 'react'
import { InputNumber } from 'antd'

const VersionJson: any = {
    // type1
    1: {
        1: [{ id: '1', name: 'version1--1' }],
        2: [{ id: '2', name: 'version1--2' }]
    },
    // type2
    2: {
        1: [{ id: '1', name: 'version2--1' }],
        2: [{ id: '2', name: 'version2--2' }]
    }
}

const getVersion = (type: number = 1, version: number = 1) => {
    console.log('version: ', !version)
    const keys = Object.keys(VersionJson)
    console.log('keys: ', keys)
    if (keys.includes(type.toString())) {
        const versionKeys = Object.keys(VersionJson[type])
        if (versionKeys.includes(version.toString())) {
            console.log(VersionJson[type][version], 'VersionJson[version][type]')

            return VersionJson[version][type] ?? []
        }
    }
    return []
}

export default function Demo1() {
    const [config, setConfig] = React.useState<any>({
        version: 1,
        type: 1
    })
    const [data, setData] = React.useState<any>([])

    useEffect(() => {
        // console.log('vvv', VersionJson[1])

        setData([...getVersion(config.version || 1, config.type || 1)])
    }, [config])

    return (
        <div>
            <button>
                version{' '}
                <InputNumber
                    min={1}
                    value={config.version}
                    onChange={(e) => setConfig({ ...config, version: e })}
                />
            </button>
            <button>
                version{' '}
                <InputNumber
                    min={1}
                    value={config.type}
                    onChange={(e) => setConfig({ ...config, type: e })}
                />
            </button>
            <button>{JSON.stringify(config)}</button>
            <div className="content">{JSON.stringify(data)}</div>
        </div>
    )
}
