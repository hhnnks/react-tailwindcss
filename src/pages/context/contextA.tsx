import React, { useContext } from 'react'
import { Button } from 'antd'
import { ActionTypes } from './types'
import useAppContext from './useContext'
function contextA() {
    const { contextValue, setContextValue, state, dispatch } = useAppContext()
    console.log('state: ', state)
    return (
        <div>
            <Button
                onClick={() => {
                    setContextValue('setContextValueB')
                    dispatch({
                        type: ActionTypes.SET_THERE,
                        field: 'theme',
                        value: 'green'
                    })
                }}
                style={{ backgroundColor: state.theme }}
            >
                buttonA
            </Button>
            <Button
                onClick={() => {
                    dispatch({
                        type: ActionTypes.SET_THERE,
                        field: 'theme',
                        value: 'red'
                    })
                }}
            >
                theme-red
            </Button>
            {contextValue}
        </div>
    )
}
export default contextA
