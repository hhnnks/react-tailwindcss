import React, { useContext } from 'react'
import { Button } from 'antd'
import useAppContext from './useContext'
import { ActionTypes } from './types'
function contextB() {
    const { contextValue, setContextValue, dispatch } = useAppContext()

    return (
        <div>
            <Button
                onClick={() => {
                    setContextValue('contextValueA')
                    dispatch({
                        type: ActionTypes.SET_THERE,
                        field: 'theme',
                        value: 'blue'
                    })
                }}
            >
                buttonB
            </Button>
            {contextValue}
        </div>
    )
}

export default contextB
