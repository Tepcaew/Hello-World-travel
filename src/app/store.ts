import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";
import categories from "../features/categoriesSlice";
import guide from "../features/guideSlice";
import { justReducer } from "../features/justReducer";

export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
    guide,
    categories,
    justReducer
  },
});

export default store;
