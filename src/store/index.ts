import { combineReducers } from 'redux'
import * as LoginReducer from './user'
export const dispatchs = {
    ...LoginReducer,
}

export default combineReducers({
    login: LoginReducer.default,
})
