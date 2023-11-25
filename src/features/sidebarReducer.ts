import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    sidebar: false
}

export const sidebarOpen = createAction("sidebar/open")

export const sidebarReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(sidebarOpen, (state) => {
        state.sidebar = !state.sidebar
    })
})