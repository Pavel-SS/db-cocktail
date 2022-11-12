import { api, initialState, InitialStateType, ItemType } from "../api/api";
import {Dispatch} from "redux";


export const setItemAC  = (items: Array<ItemType>) => ({type: 'SET_ITEM', items} as const)
type setItemAT = ReturnType<typeof setItemAC>

export const setLikeAC = (id:string, sorting:boolean) => ({type: 'SET_LIKE', id, sorting} as const)
type setLikeAT = ReturnType<typeof setLikeAC>

export const changeFilterAC = (id:string, sorting:boolean) => ({type: 'CHANGE_TODOLIST_FILTER', id, sorting} as const)
type changeFilterAT = ReturnType<typeof changeFilterAC>

export const deleteCardAC = (id:string) => ({type:'DELETE_CARD' , id} as const)
type deleteCardAT = ReturnType<typeof deleteCardAC>

type ActionType = setItemAT | setLikeAT | changeFilterAT | deleteCardAT

export const itemReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType =>{
    switch (action.type) {
        case 'SET_ITEM':{
            return {...state, drinks: action.items}
        }
        case 'SET_LIKE': {
            return {...state, drinks: state.drinks.map(item => item.idDrink === action.id ? {
                ...item,
                like: !item.like,
                sorting: !item.sorting
            }: item)}
        }
        case 'CHANGE_TODOLIST_FILTER': {
            return {...state, drinks: state.drinks.map(item => item.idDrink === action.id ? {
                ...item, 
                sorting: action.sorting
                } : item)
            }
        }
        case 'DELETE_CARD':{
            return {
                ...state,
                drinks: state.drinks.filter(item => item.idDrink !== action.id)
            }
        }
        default:
            return state;
    }
}

export const setItemThunk = async (dispatch: Dispatch) => {
    try {
        const res = await api.getData()
        dispatch(setItemAC(res.data.drinks))
    }catch (err){
        console.log("Error")
    }
}