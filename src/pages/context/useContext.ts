import { createContext, useContext } from 'react'

export const AppContext = createContext<any>(null!)

export default function useAppContext() {
    return useContext(AppContext)
}
