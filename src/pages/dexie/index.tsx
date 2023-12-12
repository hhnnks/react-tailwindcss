import React, { useState, useEffect } from 'react'
import Dexie from 'dexie'

function Dexies() {
    const db = new Dexie('MyDatabase')
    db.version(1).stores({
        items: '++id, name, price'
    })

    const [config, setConfig] = useState<any>({
        name: '',
        price: ''
    })
    const [items, setItems] = useState<any[]>([])
    const [isEdit, setIsEdit] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>(null)

    useEffect(() => {
        get()
    }, [])

    const get = () => {
        db.items.toArray().then(setItems)
    }

    const addItem = () => {
        db.items.put({ ...config })
        get()
    }

    const deleteItem = () => {
        db.items.delete(selectedItem.id)
        setSelectedItem(null)
        get()
    }

    const updateItem = (value: any, type: any) => {
        setIsEdit(true)
        setConfig({ ...config, [type]: value })
    }

    const update = () => {
        console.log(selectedItem, 'selectedItem')
        db.items.update(selectedItem.id, {
            ...config
        })
        setSelectedItem(null)
        setIsEdit(false)
        get()
    }

    const addInput = (value: string, type: string) => {
        setConfig({ ...config, [type]: value })
    }

    return (
        <div>
            <h1>CRUD Example with Dexie.js and React</h1>
            <input
                type="text"
                value={config?.name}
                onChange={(e) => addInput(e.target.value, 'name')}
            />
            <input
                type="text"
                value={config?.price}
                onChange={(e) => addInput(e.target.value, 'price')}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            type="text"
                            value={isEdit && item.id === config.id ? config.name : item.name}
                            onFocus={() => {
                                setConfig(item)
                            }}
                            onChange={(e) => updateItem(e.target.value, 'name')}
                        />
                        <input
                            type="text"
                            value={isEdit && item.id === config.id ? config.price : item.price}
                            onFocus={() => {
                                setConfig(item)
                            }}
                            onChange={(e) => updateItem(e.target.value, 'price')}
                        />
                        <button onClick={() => setSelectedItem(item)}>Select</button>
                        <button onClick={deleteItem}>Delete</button>
                        <button onClick={update}>保存</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dexies
