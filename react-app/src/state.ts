import { configureStore } from "@reduxjs/toolkit";
import ui from "./platform/ua.slice";
import { UiState } from "./platform/ua.slice";

export interface IRootState {
    ui: UiState;
}

const store = configureStore<IRootState>({
    reducer: {
        ui
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware() as any),
    devTools: process.env.NODE_ENV === "development"
});

export default store;