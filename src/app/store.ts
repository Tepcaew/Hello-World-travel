import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import  excursion  from "../features/excursionSlice";

export const store = configureStore({
    reducer:{
        application,
        excursion        
    }
})

export default store