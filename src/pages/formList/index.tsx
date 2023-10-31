import React, { useState } from 'react';

const FormList = () => {
 const [items, setItems] = useState([
   { id: 1, name: 'Item 1', edit: false },
   { id: 2, name: 'Item 2', edit: false },
   { id: 3, name: 'Item 3', edit: false },
 ]);

 const handleEdit = (id:any) => {
   const updatedItems = items.map((item) =>
     item.id === id ? { ...item, edit: true } : item
   );
   setItems(updatedItems);
 };

 const handleSave = (id:any, name:any) => {
   const updatedItems = items.map((item) =>
     item.id === id ? { ...item, name } : item
   );
   setItems(updatedItems);
   setTimeout(() => {
     const updatedItems = items.map((item) =>
       item.id === id ? { ...item, edit: false } : item
     );
     setItems(updatedItems);
   }, 1000);
 };

 const handleDelete = (id:any) => {
   const updatedItems = items.filter((item) => item.id !== id);
   setItems(updatedItems);
 };

 const handleAdd = () => {
   const newItem = {
     id: Math.max(...items.map((item) => item.id)) + 1,
     name: 'New Item',
     edit: true,
   };
   setItems([...items, newItem]);
 };

 return (
   <div>
     <ul>
       {items.map((item) => (
         <li key={item.id}>
           <input
             type="text"
             value={item.name}
             onChange={(e) => handleSave(item.id, e.target.value)}
             disabled={!item.edit}
           />
           <button onClick={() => handleEdit(item.id)}>编辑</button>
           <button onClick={() => handleDelete(item.id)}>删除</button>
         </li>
       ))}
     </ul>
     <button onClick={handleAdd}>新增</button>
   </div>
 );
};

export default FormList;