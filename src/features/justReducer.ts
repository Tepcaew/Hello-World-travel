import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  admin: false,
  broneTour: null
};

export const sidebarOpen = createAction("sidebar/open");
export const adminOn = createAction("admin/on");
export const broneTour = createAction('brone/tour')

export const justReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sidebarOpen, (state) => {
      state.sidebar = !state.sidebar;
    })
    .addCase(adminOn, (state) => {
      state.admin = !state.admin;
    })
    .addCase(broneTour, (state, action) => {
      state.broneTour = action.payload
    })
});
