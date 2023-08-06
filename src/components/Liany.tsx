import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import idle from "../assets/sprites/Liany/idle.webp";
import arm from "../assets/sprites/Liany/arm.webp";
import rightForearm from "../assets/sprites/Liany/right forearm.webp";
import leftForearm from "../assets/sprites/Liany/left forearm.webp";
import head from "../assets/sprites/Liany/head.webp";
import hair from "../assets/sprites/Liany/hair.webp";
import eyes from "../assets/sprites/eyes/open.webp";
import guitar from "../assets/guitar.webp";
import closedMouth from "../assets/sprites/mouth/closed mouth.webp";
import openMouth from "../assets/sprites/mouth/open mouth.webp";
import semiopenMouth from "../assets/sprites/mouth/semiopen mouth.webp";
import sadMouth from "../assets/sprites/mouth/sad mouth.webp";
import smilingMouth from "../assets/sprites/mouth/smiling mouth.webp";
import styles from "../styles/liany.module.css";

interface LianyProps {
  state: LianyState;
  className: string;
  setState: React.Dispatch<React.SetStateAction<LianyState>>;
  onLoad: () => void;
}

export type LianyState =
  | "talking"
  | "smiling"
  | "sad"
  | "serious"
  | "singing"
  | "finish singing";

const Liany: React.FC<LianyProps> = ({
  state,
  className,
  setState,
  onLoad,
}) => {
  const mouthTimes = [
    { mouth: closedMouth, time: 1500 },
    { mouth: openMouth, time: 500 }, //I
    { mouth: semiopenMouth, time: 600 }, //still re
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //me
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //ber
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //the third
    { mouth: openMouth, time: 500 }, //of
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 200 }, //de
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 200 }, //cemb
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //ber

    { mouth: closedMouth, time: 500 },
    { mouth: semiopenMouth, time: 500 }, // me in
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //your
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //swea
    { mouth: semiopenMouth, time: 500 }, //ter
    { mouth: closedMouth, time: 500 },
    { mouth: semiopenMouth, time: 500 }, //you
    { mouth: openMouth, time: 200 }, //said
    { mouth: semiopenMouth, time: 100 }, //it looked
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 400 }, //it looked
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 200 }, //be
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //tter

    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 100 }, //on
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //me
    { mouth: openMouth, time: 200 }, //than
    { mouth: semiopenMouth, time: 200 }, //it
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 200 }, //did
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //you
    { mouth: closedMouth, time: 700 },
    { mouth: openMouth, time: 500 }, //On
    { mouth: semiopenMouth, time: 500 }, //ly
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 200 }, //if
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 200 }, //you
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //knew

    { mouth: closedMouth, time: 500 },
    { mouth: openMouth, time: 200 }, //how
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 300 }, //much
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 100 }, //I
    { mouth: semiopenMouth, time: 500 },
    { mouth: openMouth, time: 300 }, //li
    { mouth: semiopenMouth, time: 400 }, //ed you
    { mouth: closedMouth, time: 300 },
    { mouth: semiopenMouth, time: 200 }, //But,
    { mouth: openMouth, time: 400 }, //I
    { mouth: semiopenMouth, time: 100 },
    { mouth: openMouth, time: 200 }, //Watch,
    { mouth: semiopenMouth, time: 200 }, //your
    { mouth: openMouth, time: 500 }, //eyes,
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 200 }, //as,
    { mouth: semiopenMouth, time: 500 }, //she,

    { mouth: openMouth, time: 1000 }, //Walks
    { mouth: closedMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //By
    { mouth: closedMouth, time: 900 },
    { mouth: openMouth, time: 500 }, //What
    { mouth: semiopenMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //a
    { mouth: semiopenMouth, time: 100 },
    { mouth: openMouth, time: 500 }, //sight
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 500 }, //for
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 1200 }, //sor
    { mouth: openMouth, time: 800 }, //eyes

    { mouth: closedMouth, time: 1000 },
    { mouth: openMouth, time: 500 }, //Bright
    { mouth: semiopenMouth, time: 700 }, //er
    { mouth: openMouth, time: 500 }, //than
    { mouth: semiopenMouth, time: 500 }, //the
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 1000 }, //blue
    { mouth: openMouth, time: 700 }, //sky

    { mouth: closedMouth, time: 700 },
    { mouth: semiopenMouth, time: 700 }, //She`s
    { mouth: openMouth, time: 500 }, //got
    { mouth: semiopenMouth, time: 500 }, //you
    { mouth: closedMouth, time: 300 },
    { mouth: semiopenMouth, time: 300 }, //mes
    { mouth: closedMouth, time: 100 },
    { mouth: semiopenMouth, time: 1200 }, //meri
    { mouth: openMouth, time: 700 }, //zed

    { mouth: closedMouth, time: 700 },
    { mouth: semiopenMouth, time: 300 }, //While
    { mouth: openMouth, time: 1200 }, //I
    { mouth: closedMouth, time: 200 },
    { mouth: openMouth, time: 500 }, //die
    { mouth: closedMouth, time: 100 }, //die
  ];

  const [currentMouth, setCurrentMouth] =
    useState<StaticImageData>(smilingMouth);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const [loaded, setLoaded] = useState<number>(0);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("") : undefined
  );

  const playAudio = () => {
    audio.current?.play();
    audio.current?.addEventListener("ended", () => {
      setState("finish singing");
    });
    singMouth(0);
  };

  const singMouth = (current: number) => {
    setCurrentMouth(mouthTimes[current].mouth);
    if (current < mouthTimes.length - 1 && mouthTimes[current].time) {
      setTimeout(() => singMouth(current + 1), mouthTimes[current].time);
    }
  };

  useEffect(() => {
    killTimer();
    switch (state) {
      case "sad":
        setCurrentMouth(sadMouth);
        break;
      case "serious":
      case "finish singing":
        setCurrentMouth(closedMouth);
        break;
      case "smiling":
        setCurrentMouth(smilingMouth);
        break;
      case "talking":
        setTimer(setTimeout(talk, 100));
        break;
      case "singing":
        playAudio();
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

  const handleLoad = () => {
    setLoaded((loaded) => loaded + 1);
  };

  useEffect(() => {
    if (loaded === 13) {
      onLoad();
    }
  }, [loaded]);

  useEffect(() => {
    audio.current?.addEventListener("loadedmetadata", handleLoad);
    if (audio.current) audio.current.src = "/audio/singing.mp3";
  }, []);

  return (
    <div className={`relative w-80 ${className}`}>
      <Image
        src={idle}
        alt="Liany"
        className="absolute"
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={arm}
        alt="arm"
        className={`absolute top-64 left-[182px] w-20 ${
          state === "singing" ? styles.left_arm_playing : ""
        }`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={head}
        alt="head"
        className={`absolute top-8 left-5 w-72`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={eyes}
        alt="eyes"
        className={`absolute top-32 left-[72px] w-44`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={hair}
        alt="hair"
        className={`absolute top-8 left-5 w-72`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={guitar}
        alt="guitar"
        className={`absolute top-44 left-32 w-32 rotate-[36deg]`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={rightForearm}
        alt="right forearm"
        className={`absolute top-[350px] left-[75px] w-[113px] ${
          state === "singing"
            ? styles.right_forearm_playing
            : styles.right_forearm
        }`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={leftForearm}
        alt="left forearm"
        className={`absolute top-[268px] left-[208px] w-[39px] ${
          state === "singing"
            ? styles.left_forearm_playing
            : styles.left_forearm
        }`}
        draggable={false}
        onLoad={handleLoad}
      />

      <Image
        src={currentMouth}
        alt="mouth"
        className={`absolute top-60 left-32 w-16 ${
          state === "singing" ? styles.mouth_singing : ""
        }`}
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={openMouth}
        alt="mouth"
        className="w-0"
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={semiopenMouth}
        alt="mouth"
        className="w-0"
        draggable={false}
        onLoad={handleLoad}
      />
      <Image
        src={closedMouth}
        alt="mouth"
        className="w-0"
        draggable={false}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Liany;
