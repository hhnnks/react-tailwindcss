/*
 * @Descripttion: 单例模式
 * @Date: 2023-11-13 16:10:38
 * @LastEditTime: 2023-11-13 16:23:36
 */

import React from 'react'

export default function SingletonComponent() {
    const a = new Video()
    const b = new Video()
    console.log(a === b, '=====')
    return <div>SingletonComponent</div>
}

// function Singletons(className: any) {
//     let ins: any = null
//     return class {
//         constructor(...args: any) {
//             if (!ins) {
//                 ins = new className(...args)
//             }
//             return ins
//         }
//     }
// }

// 单列模式 最佳方案
function Singletons(className: any) {
    let ins: any = null
    return new Proxy(className, {
        construct(target, args) {
            if (!ins) {
                ins = new target(...args)
            }
            return ins
        }
    })
}

class Singleton {
    constructor() {}
}
const Video = Singletons(Singleton)
