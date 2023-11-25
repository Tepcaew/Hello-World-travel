import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";
import categories from "../features/categoriesSlice";
import guide from "../features/guideSlice";
import { sidebarReducer } from "../features/sidebarReducer";
import order from "../features/ordersSlice";

export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
    guide,
    categories,
    sidebarReducer,
    order
  },
});

export default store;
