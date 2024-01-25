import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const INTIAL_STATE = {

    favCoffees: [],

}

const FavSlice = createSlice({

    name: 'favoritesCoffee',
    initialState: INTIAL_STATE,

    reducer: {

        addToFav: (state, action) => {
            state.favCoffees.push(action.payload);


        },

        removeFromFav: (state, action) => {
            state.favCoffees = state.favCoffees.filter((myCoffee) => myCoffee.id !== action.payload)
        }




    }



});

export const {

    addToFav,
    removeFromFav
} = FavSlice.actions

export default FavSlice.reducer;