import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ItemType } from "../api/api"
import { setItemThunk } from '../bll/reducer'
import { AppRootStateType } from "../bll/store"
import { Card } from "./Card"

export const CardsList = () => {
    const items = useSelector<AppRootStateType, Array<ItemType>>(state => state.bases.drinks)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState(false)
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        dispatch(setItemThunk)
    },[])

    const handlerFavorit = () => {
        setToggle(!toggle)
        setFilter(!filter)
        console.log(items[0].idDrink)
    } 
    let favoritDrinks = items
    if (filter) {
        favoritDrinks  = items.filter((d) => d.sorting)
    }
  

    return(
        <>
            <button className='mt-6 mx-auto max-w-32 px-4 py-1 rounded-lg bg-green-200' onClick={()=>{handlerFavorit()}}>{toggle ? 'Back to menu' : 'Go to Favorit '}</button>
            <div className='self-center flex flex-wrap max-w-6xl relative'>
                {favoritDrinks.map(item => {
                   return (<Card key={item.idDrink} strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} idDrink={item.idDrink} sorting={item.sorting} clickDisable={toggle}/>)
                })}
            </div>
        </>
    )
}