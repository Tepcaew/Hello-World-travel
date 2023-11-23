import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import excursion from "../features/excursionSlice";
import tours from "../features/toursSlice";
import guide from "../features/guideSlice";

export const store = configureStore({
  reducer: {
    application,
    excursion,
    tours,
    guide,
  },
});

export default store;
