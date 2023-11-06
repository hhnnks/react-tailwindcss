import React, { useState, useEffect } from 'react'

const Todo = () => {
    const [items, setItems] = useState<any[]>([])
    const [inputValue, setInputValue] = useState<any>('')
    const [itemId, setItemId] = useState<any>(null)

    useEffect(() => {
        // 从localStorage中获取保存的数据
        const savedItems = localStorage.getItem('items')
        if (savedItems) {
            setItems(JSON.parse(savedItems))
        }
    }, [])

    useEffect(() => {
        // 每次items变化时，保存数据到localStorage
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            const newItem = {
                id: new Date().getTime(),
                name: inputValue.trim()
            }
            setItems((prevItems) => [...prevItems, newItem])
            setInputValue('')
        }
    }

    const handleDeleteItem = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const handleEditItem = (id: number, newName: string) => {
        setItemId(id)
        setInputValue(newName)
        setItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, name: newName }
                }
                return item
            })
        )
    }

    const handleSave = () => {
        itemId &&
            setItems((prevItems) =>
                prevItems.map((item) => (item.id === itemId ? { ...item, name: inputValue } : item))
            )
        setItemId(null)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                        <button
                            onClick={() =>
                                item.id === itemId
                                    ? handleSave()
                                    : handleEditItem(item.id, item.name)
                            }
                        >
                            {item.id === itemId ? 'save' : 'Edit'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
