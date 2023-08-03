import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import idle from "../assets/sprites/Richard/idle.png";
import arm from "../assets/sprites/Richard/arm.png";
import closedMouth from "../assets/sprites/Richard/closed mouth.png";
import openMouth from "../assets/sprites/Richard/open mouth.png";
import sadMouth from "../assets/sprites/Richard/sad mouth.png";
import smilingMouth from "../assets/sprites/Richard/smiling mouth.png";
import styles from "../styles/hello.module.css";

interface RichardProps {
  state: "talking" | "smiling" | "sad" | "serious";
}

const Richard: React.FC<RichardProps> = ({ state }) => {
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
    <div className="relative h-96 w-80">
      <Image src={idle} alt="Richard" className="absolute" draggable={false} />
      <Image
        src={arm}
        alt="arm"
        className={`absolute top-64 left-20 w-16 ${styles.hello}`}
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

export default Richard;
