/**
 * @desc: 自适应文字浮窗
 * @return {*}
 */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Tooltip } from 'antd'
import debounce from 'lodash/debounce'

export const AdaptiveCol = ({ text }: { text: string }) => {
    const [isEllipsis, setIsEllipsis] = useState(true)
    const colRef = useRef<any>(null)
    const handleEllipsis = () => {
        console.log(colRef.current?.clientWidth, 'colRef.current?.clientWidth')
        console.log(colRef.current?.scrollWidth, 'colRef.current?.scrollWidth')
        if (colRef.current?.clientWidth < colRef.current?.scrollWidth) {
            setIsEllipsis(true)
        } else {
            setIsEllipsis(false)
        }
    }
    const windowChange = debounce(handleEllipsis, 500)
    useEffect(() => {
        // 第一次进入页面也需要知道文本是否溢出
        handleEllipsis()
        window.addEventListener('resize', windowChange)
        return () => {
            window.removeEventListener('resize', windowChange)
        }
    }, [])

    useEffect(() => {
        console.log(isEllipsis, 'isEllipsis')
    })
    return (
        <div className="adaptiveCol">
            <Tooltip title={isEllipsis ? text : ''}>
                <div
                    ref={colRef}
                    style={{ cursor: isEllipsis ? 'pointer' : 'default', whiteSpace: 'nowrap' }}
                >
                    {text}
                </div>
            </Tooltip>
        </div>
    )
}
