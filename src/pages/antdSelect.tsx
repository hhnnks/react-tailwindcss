import React from 'react'
import { Select } from 'antd'
// import { List } from 'react-virtualized'
const data = new Array(1000).fill(1).map((item, index) => index)

function AntdSelect() {
    const handleScroll = (event: any) => {
        const scrollPosition = event.target.scrollTop
        if (scrollPosition === 0) {
            //   setHeight(window.innerHeight);
        } else {
            //   setHeight(0);
        }
    }

    const rowRenderer = ({ index, key, style }: { index: any; key: any; style: any }) => {
        // 返回每一行的内容
        return (
            <div key={key} style={style}>
                Row {index}
            </div>
        )
    }

    return (
        <div>
            <Select defaultValue="lucy" style={{ width: 120 }}>
                {data.map((item) => {
                    return (
                        <Select.Option key={item} value={item}>
                            {item}
                        </Select.Option>
                    )
                })}
            </Select>

            {/* <List width={300} height={400} rowCount={1000} rowHeight={30} rowRenderer={rowRenderer}>
              
            </List> */}
        </div>
    )
}

export default AntdSelect
