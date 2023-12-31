import React, { useReducer } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { styled } from 'styled-components'

import Left from './left'
import Main from './main'
import Right from './right'

import { AppContext } from '../context/useContext'
import { initState, reducer } from '../context/reducer'

export default function Batflow() {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            <DndProvider backend={HTML5Backend}>
                <BatflowContainer>
                    <Left />
                    <Main />
                    <Right />
                </BatflowContainer>
            </DndProvider>
        </AppContext.Provider>
    )
}

const BatflowContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 240px;
        border: 1px solid #ccc;

        .left-drag-item {
            display: flex;
            align-items: center;
            padding: 0 20px;
        }
    }
    .main {
        flex: 1;
    }
    .right {
        width: 240px;
        border: 1px solid #ccc;
    }
`
