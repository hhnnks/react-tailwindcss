import React, { useEffect, useState } from 'react'
import { Image, Button } from 'antd'

import img1 from '@/assets/preImage/111.jpg'
import img2 from '@/assets/preImage/222.jpg'
import img3 from '@/assets/preImage/333.jpg'
import img4 from '@/assets/preImage/444.jpg'

const ImagePreview = ({ imageUrl }: { imageUrl: any }) => {
    const [zoomLevel, setZoomLevel] = useState(1)
    const [rotationAngle, setRotationAngle] = useState(0)
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })

    const handleZoom = (delta: any) => {
        setZoomLevel((prevZoom) => prevZoom + delta)
    }

    const handleRotate = () => {
        setRotationAngle((prevAngle) => prevAngle + 90)
    }

    const handleDragStart = (event: any) => {
        const { clientX, clientY } = event.touches ? event.touches[0] : event
        setDragPosition({ x: clientX, y: clientY })
    }

    const handleDragMove = (event: any) => {
        event.preventDefault()
        const { clientX, clientY } = event.touches ? event.touches[0] : event
        const dx = clientX - dragPosition.x
        const dy = clientY - dragPosition.y
        setDragPosition({ x: clientX, y: clientY })
        // Update image position using dx and dy
    }

    return (
        <div>
            <img
                src={imageUrl}
                alt="Preview"
                style={{
                    transform: `scale(${zoomLevel}) rotate(${rotationAngle}deg)`,
                    cursor: 'grab'
                }}
                onWheel={(e) => handleZoom(e.deltaY > 0 ? -0.1 : 0.1)}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={() => setDragPosition({ x: 0, y: 0 })}
            />
            <button onClick={handleZoom.bind(null, -0.1)}>Zoom In</button>
            <button onClick={handleZoom.bind(null, 0.1)}>Zoom Out</button>
            <button onClick={handleRotate}>Rotate</button>
        </div>
    )
}

function Demo1() {
    const [count, setCount] = useState(0)

    const gets = () => {
        console.log(count, 'cout')
    }

    useEffect(() => {
        gets()
    }, [count])

    return (
        <div>
            {count}
            <Button
                onClick={() => {
                    setCount((count) => (count = 100))
                }}
            >
                点击
            </Button>
        </div>
    )
}

function PreImage() {
    return (
        <div>
            {/* <ImagePreview imageUrl={img1}/> */}
            <Demo1 />
            {/* <Image width={200} height={200} src={img1} />
            <Image width={200} height={200} src={img2} />
            <Image width={200} height={200} src={img3} />
            <Image width={200} height={200} src={img4} /> */}
        </div>
    )
}

export default PreImage
