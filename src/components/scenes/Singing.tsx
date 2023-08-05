import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stage.module.css";
import micro from "@/assets/micro.webp";
import Liany, { LianyState } from "../Liany";
import { Button } from "antd";
import JSConfetti from "js-confetti";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";

const Singing = () => {
  let jsConfetti: JSConfetti;
  const dispatch = useDispatch();
  const [state, setState] = useState<LianyState>("smiling");
  const slaps = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/audio/slaps.mp3") : undefined
  );
  useEffect(() => {}, []);

  useEffect(() => {
    if (state === "finish singing") {
      setTimeout(slapsPeople, 2000);
    }
  }, [state]);

  const slapsPeople = () => {
    slaps.current?.play();
    jsConfetti = new JSConfetti();
    setTimeout(() => setState("smiling"), 1000);
    throwConfetti();
    setTimeout(throwConfetti, 1000);
    setTimeout(throwConfetti, 2000);
    setTimeout(throwConfetti, 5000);

    setTimeout(() => {
      dispatch(setTransition(true));
      setTimeout(() => {
        dispatch(setScene("question"));
        dispatch(setTransition(false));
      }, 1000);
    }, 10000);
  };

  const throwConfetti = () => {
    jsConfetti.addConfetti({ confettiNumber: 1000 });
  };

  return (
    <div className={`relative w-full h-screen ${styles.stage}`}>
      <Liany
        {...{ state, setState }}
        className="top-[60px] left-1/2 -translate-x-1/2 absolute"
      />
      <Image
        src={micro}
        alt="micro"
        className="absolute w-28 top-[330px] left-[40%] -translate-x-1/2"
      />
      <Button
        size="large"
        className=" top-[60px] left-1/2 -translate-x-1/2 absolute "
        onClick={() => setState("singing")}
      >
        Sing
      </Button>
    </div>
  );
};

export default Singing;
