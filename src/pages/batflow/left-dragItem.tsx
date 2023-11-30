import React from 'react'
import { useDrag } from 'react-dnd'
import pageStyle from '../../assets/index.less'
import { CRAD } from './config'

function LeftDragItem({ data }: { data: any }) {
  console.log('datasss: ', data)
  const [{ isDragging }, dragRef] = useDrag(() => {
    return {
      type: CRAD,
      item: {
        data: {
          ...data,
        },
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }
  })

  const opacity = isDragging ? 0.4 : 1
  const componentIconMap: any = {
    Input: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M2 2h12v12H2z" strokeLinejoin="round"></path>
        <path d="M5 5h6" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M8 5v6" strokeLinecap="round"></path>
      </g>
    ),
    InputNumber: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M2 2h12v12H2z" strokeLinejoin="round"></path>
        <path
          d="M9.092 10.856V5.144h-.656a3.324 3.324 0 0 1-.72.568c-.288.16-.552.272-.808.336v.864c.528-.152.968-.392 1.312-.72v4.664h.872Z"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth="0.1"
        ></path>
      </g>
    ),
    Button: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M1.5 2.5h13v11h-13z" strokeLinejoin="round"></path>
        <path
          d="M4.897 9.785c.38 0 .68-.07.89-.21.245-.17.37-.435.37-.795 0-.24-.06-.435-.175-.575-.12-.145-.295-.24-.53-.285a.881.881 0 0 0 .41-.295.888.888 0 0 0 .146-.51.811.811 0 0 0-.28-.645c-.2-.17-.48-.255-.835-.255H3.258v3.57h1.64Zm-.16-2.07h-.895v-1.02h.905c.24 0 .41.04.52.12.1.075.155.2.155.37 0 .185-.054.32-.154.405-.106.08-.28.125-.53.125Zm.075 1.59h-.97v-1.11h.985c.26 0 .45.045.57.135.115.09.175.235.175.44 0 .2-.08.34-.24.43-.125.07-.3.105-.52.105Zm3.375.48v-3.07h1.17v-.5H6.434v.5h1.17v3.07h.585Zm2.18 0v-2.61h.02l1.785 2.61h.57v-3.57h-.59V8.79h-.02l-1.764-2.575h-.585v3.57h.585Z"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth="0.1"
        ></path>
      </g>
    ),
    Table: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M2 2h12v12H2z" strokeLinejoin="round"></path>
        <path
          d="M2 6h12M2 10h12"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M6 6v8M10 6v8" strokeLinecap="round"></path>
      </g>
    ),
    DatePicker: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M1.5 3h13v11h-13z" strokeLinejoin="round"></path>
        <path
          d="M8.784 12.005v-4h-.493c-.134.14-.302.269-.504.392-.202.112-.392.19-.571.235v.65c.37-.106.672-.269.913-.487v3.21h.655Z"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth="0.2"
        ></path>
        <path
          d="M5 2v2M11 2v2M1.5 6.002h13"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    ),
    Radio: (
      <path d="m7.976 1 .241.003A7 7 0 1 1 7.977 1Zm.004 1-.225.005A6 6 0 1 0 7.98 2Zm.03 8.8a.6.6 0 1 1 .004 1.2.6.6 0 0 1-.005-1.2Zm-.024-6.787c1.3-.004 2.368 1.003 2.455 2.258l.007.18c.01.33-.07.742-.325 1.15-.258.414-.656.734-1.2.922l-.272.085c-.12.049-.144.159-.146.744v.407l-1 .003v-.296c.007-1.197.136-1.59.83-1.81l.12-.034c.406-.11.663-.3.82-.55.111-.18.16-.366.171-.51l.002-.102a1.453 1.453 0 0 0-2.9-.13l-.007.14-1 .002a2.453 2.453 0 0 1 2.445-2.46Z"></path>
    ),
    Select: (
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M1.5 3h13v10h-13z"></path>
        <path
          d="m12.5 6.95-2.121 2.122-2.122-2.121"
          strokeLinecap="round"
        ></path>
      </g>
    ),
    Checkbox: (
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M2 2h12v12H2z"></path>
        <path
          d="m11.536 5.825-4.243 4.243-2.829-2.829"
          strokeLinecap="round"
        ></path>
      </g>
    ),
    UploadFile: (
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path d="M1.5 2.5h5l2 2h6v9h-13z"></path>
        <path
          d="M5.879 8.612 8 6.491l2.121 2.121M8 6.509v5"
          strokeLinecap="round"
        ></path>
      </g>
    ),
    UploadImage: (
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinejoin="round"
      >
        <path
          d="m10.964 11.732 1.768-1.768 1.768 1.768M9.5 12.5h-8v-10h13v6M12.732 9.964v3.5"
          strokeLinecap="round"
        ></path>
        <path d="m3.5 10.5 2-2 2 2 5-5" strokeLinecap="round"></path>
        <circle cx="4.5" cy="5.5" r="1"></circle>
      </g>
    ),
    Text: (
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M2 2h12v12H2z" strokeLinejoin="round"></path>
        <path d="M5 5h6" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M8 5v6" strokeLinecap="round"></path>
      </g>
    ),
  }

  return (
    <div
    className='left-drag-item'
      ref={dragRef}
      style={{
        opacity,
      }}
    >
      <svg
        style={{
          color: '#7c7d82',
          height: 16,
          width: 16,
          marginRight: 4,
        }}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        {componentIconMap[data.type] || (
          <g fill="none" fillRule="evenodd" stroke="currentColor">
            <path d="M1.5 2.5h13v11h-13z" strokeLinejoin="round"></path>
            <path
              d="M5.621 10.121 3.5 8l2.121-2.121M10.378 5.879 12.499 8l-2.121 2.121"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path d="m9 5-2 6" strokeLinecap="round"></path>
          </g>
        )}
      </svg>
      {data.displayName}
    </div>
  )
}

export default LeftDragItem
