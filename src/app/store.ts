import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";

export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
  },
});

export default store;
