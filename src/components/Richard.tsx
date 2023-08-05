import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import idle from "../assets/sprites/Richard/idle.webp";
import rightArm from "../assets/sprites/Richard/right arm.webp";
import leftArm from "../assets/sprites/Richard/left arm.webp";
import hair from "../assets/sprites/Richard/hair.webp";
import head from "../assets/sprites/Richard/head.webp";
import closedMouth from "../assets/sprites/mouth/closed mouth.webp";
import openMouth from "../assets/sprites/mouth/open mouth.webp";
import sadMouth from "../assets/sprites/mouth/sad mouth.webp";
import smilingMouth from "../assets/sprites/mouth/smiling mouth.webp";
import styles from "../styles/richard.module.css";
import openEyes from "@/assets/sprites/eyes/open.webp";
import closedEyes from "@/assets/sprites/eyes/closed.webp";
import happyEyes from "@/assets/sprites/eyes/happy.webp";
import cryEyes from "@/assets/sprites/eyes/cry.webp";
import { useSelector } from "react-redux";
import { RootState } from "@/core/stores/store";

interface RichardProps {
  state: RichardState;
  className?: string;
}

export type RichardState =
  | "talking"
  | "smiling"
  | "sad"
  | "serious"
  | "happy"
  | "cry";

const Richard: React.FC<RichardProps> = ({ state, className }) => {
  const scene = useSelector((state: RootState) => state.scene.current);
  const [currentMouth, setCurrentMouth] =
    useState<StaticImageData>(smilingMouth);
  const [currentEyes, setCurrentEyes] = useState<StaticImageData>(openEyes);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const [blinkTimer, setBlinkTimer] = useState<NodeJS.Timer>();

  useEffect(() => {
    killTimer();
    switch (state) {
      case "sad":
        setCurrentMouth(sadMouth);
        break;
      case "serious":
        setCurrentMouth(closedMouth);
        break;
      case "smiling":
        setCurrentMouth(smilingMouth);
        break;
      case "talking":
        setTimer(setTimeout(talk, 100));
        break;
      case "happy":
        clearInterval(blinkTimer);
        setCurrentEyes(happyEyes);
        setCurrentMouth(smilingMouth);
        break;
      case "cry":
        setCurrentMouth(sadMouth);
        clearInterval(blinkTimer);
        setCurrentEyes(cryEyes);
        break;
      default:
        setCurrentMouth(smilingMouth);
        break;
    }

    return () => {
      killTimer();
    };
  }, [state]);

  useEffect(() => {
    setBlinkTimer(setInterval(blink, 5000));
    return () => clearInterval(blinkTimer);
  }, []);

  const blink = () => {
    setCurrentEyes(closedEyes);
    setTimeout(() => setCurrentEyes(openEyes), 200);
  };

  const talk = () => {
    if (state === "talking") {
      setCurrentMouth((currentMouth) =>
        currentMouth === openMouth ? closedMouth : openMouth
      );
    }
  };

  useEffect(() => {
    if (state === "talking") {
      setTimer(setTimeout(talk, 100));
    }
  }, [currentMouth]);

  const killTimer = () => {
    if (timer) clearInterval(timer);
    setTimer(void 0);
  };

  return (
    <div
      className={`relative w-80 h-96 ${className} ${
        state === "happy" && styles.happy
      }`}
    >
      <Image src={idle} alt="Richard" className="absolute" draggable={false} />
      <Image
        src={rightArm}
        alt="arm"
        className={`absolute top-64 left-20 w-16 ${
          scene === "hello" ? styles.hello : ""
        } ${state === "happy" && styles.right_arm_happy}`}
        draggable={false}
      />
      <Image
        src={leftArm}
        alt="arm"
        className={`absolute top-64 left-[181px] w-16 ${
          state === "happy" && styles.left_arm_happy
        }`}
        draggable={false}
      />
      <div className="absolute top-[0px] w-[319px]">
        <Image
          src={head}
          alt="head"
          className={`absolute top-[94px] left-[51px] w-[232px]`}
          draggable={false}
        />
        <Image
          src={currentMouth}
          alt="mouth"
          className={`absolute top-60 left-32 w-16`}
          draggable={false}
        />
        <Image
          src={currentEyes}
          alt="eyes"
          className={`absolute top-32 left-20 w-44`}
          draggable={false}
        />
        <Image
          src={hair}
          alt="hair"
          className={`absolute top-0 left-0 w-[331px]`}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Richard;
