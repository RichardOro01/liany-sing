import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Scene } from "../../pages/index";

export interface SceneState {
  current: Scene;
  transition: boolean;
}

const initialState: SceneState = {
  current: "singing",
  transition: false,
};

export const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (state, action: PayloadAction<Scene>) => {
      state.current = action.payload;
    },
    setTransition: (state, action: PayloadAction<boolean>) => {
      state.transition = action.payload;
    },
  },
});

export const { setScene, setTransition } = sceneSlice.actions;

export default sceneSlice.reducer;
