import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stage.module.css";
import micro from "@/assets/micro.png";
import Liany, { LianyState } from "../Liany";
import { Button } from "antd";
import JSConfetti from "js-confetti";

const Singing = () => {
  const [state, setState] = useState<LianyState>("smiling");
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({ confettiNumber: 1000 });
  }, []);

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
