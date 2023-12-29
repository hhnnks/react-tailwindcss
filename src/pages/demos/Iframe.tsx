import React, { useEffect, useRef } from 'react'

const config = {
    userId: '10091',
    nonce: '1234567890',
    value: 'SJH',
    type: 'iframe'
}

export default function Iframe() {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [value, setValue] = React.useState('')
    useEffect(() => {
        console.log(123)
        console.log(config, 'config')
        iframeRef.current?.contentWindow?.postMessage({ ...config, value }, '*') // 向iframe发送消息
    }, [value])

    useEffect(()=>{
        setValue('123123123')

    },[])

    const handleClick = (value: string) => {
        setValue(value)
        // iframeRef.current?.contentWindow?.postMessage({ ...config, value }, '*') // 向iframe发送消息
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div>
                <button onClick={() => handleClick('Play')}>Play</button>
                <button onClick={() => handleClick('Main')}>Main</button>
                <button onClick={() => handleClick('Content')}>Content</button>
            </div>

            <iframe
                ref={iframeRef}
                width={'800px'}
                height={'300px'}
                src="http://localhost:3000/"
                title="YouTube video player"
            />
        </div>
    )
}
