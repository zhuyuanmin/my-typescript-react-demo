import { ADDNAME } from '../action-type'

interface ActionType {
    type: string,
    payload?: any
}

const initData = {
    name: '张三',
    age: 20
}

export default function user(state = initData, action: ActionType) {
    switch (action.type) {
        case ADDNAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}