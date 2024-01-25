import { configureStore } from "@reduxjs/toolkit";
import favreducer from './FavSlice'

export default configureStore({

    reducer: {
        favoritesCoffee: favreducer

    },
});
