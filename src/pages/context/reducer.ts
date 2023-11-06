export const initState = {
    theme: 'green'
}

export enum ActionTypes {
    SET_THERE = 'SET_THERE'
}

type UpdateAction = {
    type: ActionTypes.SET_THERE
    field: string
    value: any
}

export const reducer = (state = initState, action: UpdateAction) => {
    switch (action.type) {
        case ActionTypes.SET_THERE:
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            throw new Error()
    }
}
