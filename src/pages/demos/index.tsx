import React, {
    Component,
    useContext,
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react'

import { Space, Modal, Button, Popover } from 'antd'

const MyContext = React.createContext<any>(null!)

export default function Demos() {
    return (
        <Space>
            <MyComponent />
        </Space>
    )
}

class MyComponent extends Component {
    constructor(props: any) {
        super(props)
    }
    myRef = React.createRef<any>()

    state = {
        name: '',
        visible: false
    }

    handleChange = (event: any) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOk = () => {
        this.setState({
            visible: true
        })
        this.myRef && this.myRef.current.get()
    }

    setName = () => {
        this.setState({
            name: Date.now()
        })
    }

    // 获取时间戳

    MyonCancel = () => {}
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <Button onClick={() => this.handleOk()}>Modal</Button>
                <MyContext.Provider
                    value={{
                        ...this.state,
                        setName: this.setName
                    }}
                >
                    <MyParentComponent count={0} vis={100} />
                </MyContext.Provider>
                <Button>Modal</Button>

                <Childrens
                    visible={this.state.visible}
                    ref={this.myRef}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                />
            </div>
        )
    }
}

function Children(props: any, ref: any) {
    const [count, setCount] = useState(0)

    useImperativeHandle(ref, () => ({
        get,
        set
    }))

    const get = () => {
        console.log('get')
    }
    const set = () => {
        console.log('set')
    }
    useEffect(() => {
        console.log(props.visible, 'props.visible')
        if (!props.visible) {
            setCount(100)
        } else {
            setCount(111110)
        }
    }, [props.visible])

    return (
        <div className="bbx">
            <h1>{count}</h1>
            <Modal
                open={props.visible}
                onCancel={() => {
                    props.onCancel()
                }}
            >
                {count}
            </Modal>
        </div>
    )
}

const Childrens = forwardRef(Children)

function Context(Children: any, context: any) {
    return (props: any) => {
        const cxt = useContext(context) as any
        return <Children {...props} {...cxt} />
    }
}

class MyChildComponent extends Component {
    static contextType = MyContext

    render() {
        const { name, setName } = this.props as any
        console.log(this.props, 'this.props')
        return (
            <div>
                {JSON.stringify(this.props)}
                <h1>{name}</h1>
                <Button onClick={() => setName()}>取消</Button>
            </div>
        )
    }
}

const MyParentComponent = Context(MyChildComponent, MyContext)
