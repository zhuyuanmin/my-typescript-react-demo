import { ADDAGE } from '../action-type'

interface ActionType {
    type: string,
    payload?: any
}

const initData = {
    name: '李四',
    age: 24
}

export default function friend(state = initData, action: ActionType) {
    switch (action.type) {
        case ADDAGE:
            return { ...state, age: action.payload }
        default:
            return state
    }
}