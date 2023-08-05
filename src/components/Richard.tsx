import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import idle from "../assets/sprites/Richard/idle.png";
import arm from "../assets/sprites/Richard/arm.png";
import hair from "../assets/sprites/Richard/hair.png";
import closedMouth from "../assets/sprites/mouth/closed mouth.png";
import openMouth from "../assets/sprites/mouth/open mouth.png";
import sadMouth from "../assets/sprites/mouth/sad mouth.png";
import smilingMouth from "../assets/sprites/mouth/smiling mouth.png";
import styles from "../styles/richard.module.css";
import openEyes from "@/assets/sprites/eyes/open.png";
import closedEyes from "@/assets/sprites/eyes/closed.png";
import { useSelector } from "react-redux";
import { RootState } from "@/core/stores/store";

interface RichardProps {
  state: RichardState;
  className?: string;
}

export type RichardState = "talking" | "smiling" | "sad" | "serious" | "happy";

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
        setCurrentEyes(closedEyes);
        setCurrentMouth(smilingMouth);

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
    <div className={`relative w-80 h-96 ${className} ${styles.happy}`}>
      <Image src={idle} alt="Richard" className="absolute" draggable={false} />

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
      <Image
        src={arm}
        alt="arm"
        className={`absolute top-64 left-20 w-16 ${
          scene === "hello" ? styles.hello : ""
        }`}
        draggable={false}
      />
    </div>
  );
};

export default Richard;
