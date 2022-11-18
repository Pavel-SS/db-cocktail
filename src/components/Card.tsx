import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ItemType } from '../api/api';
import { deleteCardAC, setLikeAC } from '../bll/reducer';

export const Card: React.FC<ItemType> = ({
    strDrink,
    strDrinkThumb,
    idDrink,
    sorting,
    clickDisable,
}) => {
    const [isLike, setIsLike] = useState(false);
    const dispatch = useDispatch();

    const handlerLike = (id: string, sorting: boolean): void => {
        dispatch(setLikeAC(id, sorting));
        setIsLike(!isLike);
    };

    const handlerDel = (id: string): void => {
        dispatch(deleteCardAC(id));
    };

    return (
        <div className="border-2 m-2 w-52 h-60 relative hover:border-green-500">
            <img className="pt-8" src={strDrinkThumb} alt="pic" />
            <p className="absolute bg-white w-full bottom-full translate-y-full text-center text-emerald-800">
                {strDrink}
            </p>
            <div className="absolute w-full mb-4 flex justify-end m-auto translate-y-2/3 top-3/4 ">
                <button
                    type="button"
                    className={`mr-2 w-8 h-8 rounded-full leading-3 text-black text-2xl border-2 font-bold hover:border-green-500 ${
                        isLike ? 'bg-green-500 border-green-500' : 'bg-white'
                    }`}
                    onClick={() => handlerLike(idDrink, sorting)}
                >
                    🖒
                </button>
                {!clickDisable ? (
                    <button
                        type="button"
                        className="relative mr-2  border-2 bg-white w-8 h-8 rounded-full text-l hover:border-red-700 hover:bg-red-700"
                        onClick={() => handlerDel(idDrink)}
                    >
                        🗑
                    </button>
                ) : null}
            </div>
        </div>
    );
};
