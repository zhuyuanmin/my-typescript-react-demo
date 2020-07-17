import { Dispatch } from 'redux'
import { ADDNAME, ADDAGE } from '../action-type'

//包含所有的action creator
export const addNameCreater = (name: string) => ({ type: ADDNAME, payload: name })
export const addAgeCreater = (age: number) => ({ type: ADDAGE, payload: age })
export const addNameAsync = (name: string) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(addNameCreater(name))
        }, 2000)
    }
}
