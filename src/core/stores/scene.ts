import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Scene } from "../../pages/index";

export interface SceneState {
  current: Scene;
}

const initialState: SceneState = {
  current: "",
};

export const sceneSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setScene: (state, action: PayloadAction<Scene>) => {
      state.current = action.payload;
    },
  },
});

export const { setScene } = sceneSlice.actions;

export default sceneSlice.reducer;
