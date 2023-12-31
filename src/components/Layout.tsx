import React from "react";
import MainMenu from "@/components/MainMenu";
import Hello from "@/components/scenes/Hello";
import Question from "@/components/scenes/Question";
import Singing from "@/components/scenes/Singing";
import { RootState } from "@/core/stores/store";
import { useSelector } from "react-redux";
import Transition from "./Transition";

const Layout = () => {
  const scene = useSelector((state: RootState) => state.scene.current);
  return (
    <div className="flex flex-col flex-1 w-full">
      {!scene && <MainMenu />}
      {scene === "hello" && <Hello />}
      {scene === "singing" && <Singing />}
      {scene === "question" && <Question />}
      <Transition />
    </div>
  );
};

export default Layout;
