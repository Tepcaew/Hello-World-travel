import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";
import categories from "../features/categoriesSlice";
import guide from "../features/guideSlice";
<<<<<<< HEAD
import order from "../features/ordersSlice";
=======
import { sidebarReducer } from "../features/sidebarReducer";

>>>>>>> main
export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
    guide,
    categories,
<<<<<<< HEAD
    order
    
=======
    sidebarReducer
>>>>>>> main
  },
});

export default store;
