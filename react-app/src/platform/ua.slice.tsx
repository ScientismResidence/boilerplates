import { createSlice } from "@reduxjs/toolkit";

export type ThemeType = 'light' | 'dark'; 

export type UiState = {
    theme: ThemeType;
}

const theme = localStorage.getItem('theme');

const state: UiState = {
    theme: theme === 'dark' ? 'dark' : 'light',
};

const { actions, reducer } = createSlice({
    name: "ui",
    initialState: state,
    reducers: {
        toggleThemeAction(state: UiState) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        }
    }
});

export default reducer;
export const {
    toggleThemeAction
} = actions;