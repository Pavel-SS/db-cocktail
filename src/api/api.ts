import axios from 'axios';

export type ItemType = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
    sorting: boolean;
    like?: boolean;
    clickDisable?: boolean;
};

export type InitialStateType = {
    drinks: Array<ItemType>;
};
export const initialState: InitialStateType = { drinks: [] };

export const api = {
    getData() {
        return axios.get<InitialStateType>(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
        );
    },
};
