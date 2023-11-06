import React, { useState, useContext, useReducer } from 'react'
import { AppContext } from './useContext'
import { initState, reducer } from './reducer'
import ContextA from './contextA'
import ContextB from './contextB'

function Context() {
    const [state, dispatch] = useReducer(reducer, initState)
    const [contextValue, setContextValue] = useState('')

    return (
        <div>
            <AppContext.Provider
                value={{
                    setContextValue,
                    contextValue,
                    state,
                    dispatch
                }}
            >
                <ContextA />
                <ContextB />
            </AppContext.Provider>
        </div>
    )
}

export default Context
