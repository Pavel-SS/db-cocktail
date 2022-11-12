import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { itemReducer } from "./reducer"

const rootReducer = combineReducers({
    bases: itemReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>