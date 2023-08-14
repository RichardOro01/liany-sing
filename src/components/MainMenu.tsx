import React, { useEffect } from "react";
import styles from "../styles/neon.module.css";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";

const MainMenu = () => {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(setTransition(true));

    setTimeout(() => {
      dispatch(setScene("hello"));
    }, 1000);
  };

  useEffect(() => {
    fetch("/audio/singing.mp3");
    fetch("/audio/slaps.mp3");
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 p-4 py-8">
      <div
        className={`border-4 border-pink-400 p-12 rounded-2xl flex flex-col justify-center items-center gap-8 animate-pulse animate-infinite animate-ease-linear`}
      >
        <h1
          className={`font-semibold text-5xl font-[cursive] ${styles.neonText}`}
        >
          Liany
        </h1>
        <h2
          className={`font-semibold text-3xl font-[cursive] ${styles.neonText}`}
        >
          Superstar
        </h2>
      </div>
      <Button size="large" className="!px-20" onClick={handleStart}>
        Play
      </Button>
    </div>
  );
};

export default MainMenu;
