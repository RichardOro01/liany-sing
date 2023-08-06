import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stage.module.css";
import fontStyles from "@/styles/neon.module.css";
import micro from "@/assets/micro.webp";
import Liany, { LianyState } from "../Liany";
import JSConfetti from "js-confetti";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";

const Singing = () => {
  let jsConfetti: JSConfetti;
  const dispatch = useDispatch();
  const [loadedAll, setLoadedAll] = useState(false);
  const [state, setState] = useState<LianyState>("smiling");
  const slaps = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/audio/slaps.mp3") : undefined
  );
  const [loaded, setLoaded] = useState(0);
  const handleSing = () => {
    if (state !== "singing") {
      setState("singing");
    }
  };

  useEffect(() => {
    if (state === "finish singing") {
      setTimeout(slapsPeople, 2000);
    }
  }, [state]);

  const handleLoad = () => {
    setLoaded((loaded) => loaded + 1);
  };

  useEffect(() => {
    console.log(loaded);
    if (loaded === 3) {
      setLoadedAll(true);
      dispatch(setTransition(false));
    }
  }, [loaded]);

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
        onLoad={handleLoad}
      />
      <Image
        src={micro}
        alt="micro"
        className="absolute w-28 top-[330px] left-[40%] -translate-x-1/2"
        onLoad={handleLoad}
      />
      <Image
        src={"/stage.webp"}
        alt="micro"
        width={0}
        height={0}
        onLoad={handleLoad}
      />
      {loadedAll && (
        <h1
          className={`bottom-10 right-10 fixed animate-fade-down animate-delay-[3s] font-semibold text-5xl font-[cursive] ${
            fontStyles.neonText2
          } ${state === "singing" && styles.fade}`}
          onClick={handleSing}
        >
          Sing
        </h1>
      )}
    </div>
  );
};

export default Singing;
