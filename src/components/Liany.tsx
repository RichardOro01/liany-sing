import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import idle from "../assets/sprites/Liany/idle.png";
import arm from "../assets/sprites/Liany/arm.png";
import rightForearm from "../assets/sprites/Liany/right forearm.png";
import leftForearm from "../assets/sprites/Liany/left forearm.png";
import head from "../assets/sprites/Liany/head.png";
import hair from "../assets/sprites/Liany/hair.png";
import eyes from "../assets/sprites/eyes/open.png";
import guitar from "../assets/guitar.webp";
import closedMouth from "../assets/sprites/mouth/closed mouth.png";
import openMouth from "../assets/sprites/mouth/open mouth.png";
import sadMouth from "../assets/sprites/mouth/sad mouth.png";
import smilingMouth from "../assets/sprites/mouth/smiling mouth.png";
import styles from "../styles/liany.module.css";

interface RichardProps {
  state: "talking" | "smiling" | "sad" | "serious";
  className: string;
}

const Liany: React.FC<RichardProps> = ({ state, className }) => {
  const [currentMouth, setCurrentMouth] =
    useState<StaticImageData>(smilingMouth);
  const [timer, setTimer] = useState<NodeJS.Timer>();

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
      default:
        setCurrentMouth(smilingMouth);
        break;
    }

    return () => {
      killTimer();
    };
  }, [state]);

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
    <div className={`relative w-80 ${className}`}>
      <Image src={idle} alt="Liany" className="absolute" draggable={false} />
      <Image
        src={arm}
        alt="arm"
        className={`absolute top-64 left-[182px] w-20`}
        draggable={false}
      />
      <Image
        src={head}
        alt="head"
        className={`absolute top-8 left-5 w-72`}
        draggable={false}
      />
      <Image
        src={eyes}
        alt="eyes"
        className={`absolute top-32 left-[72px] w-44`}
        draggable={false}
      />
      <Image
        src={hair}
        alt="hair"
        className={`absolute top-8 left-5 w-72`}
        draggable={false}
      />
      <Image
        src={guitar}
        alt="guitar"
        className={`absolute top-44 left-32 w-32 rotate-[36deg]`}
        draggable={false}
      />
      <Image
        src={rightForearm}
        alt="right forearm"
        className={`absolute top-[350px] left-[75px] w-[113px] ${styles.right_forearm}`}
        draggable={false}
      />
      <Image
        src={leftForearm}
        alt="left forearm"
        className={`absolute top-[268px] left-[208px] w-[39px] ${styles.left_forearm}`}
        draggable={false}
      />

      <Image
        src={currentMouth}
        alt="mouth"
        className={`absolute top-60 left-32 w-16`}
        draggable={false}
      />
    </div>
  );
};

export default Liany;
