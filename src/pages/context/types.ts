export enum ActionTypes {
    SET_THERE = 'SET_THERE',
    SET_FOCUSID = 'SET_FOCUSID',
    APPEND = 'APPEND',
    CLEAR = 'CLEAR',
    REMOVE = 'REMOVE',
    UPDATE = 'UPDATE',
    APPENDCOM = 'APPENDCOM',
    MOVECOM = 'MOVECOM',
    REMOVECOM='REMOVECOM'
}

export type UpdateAction<T> = {
    type: T
    field: string
    value: any
}
