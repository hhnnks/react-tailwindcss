import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const BatFlow = () => {
    const [grid, setGrid] = useState([
        { id: 1, x: 0, y: 0 },
        { id: 2, x: 1, y: 0 },
        { id: 3, x: 2, y: 0 },
        { id: 4, x: 0, y: 1 },
        { id: 5, x: 1, y: 1 },
        { id: 6, x: 2, y: 1 }
    ])

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
              dnd
            </DndProvider>
        </div>
    )
}

export default BatFlow
