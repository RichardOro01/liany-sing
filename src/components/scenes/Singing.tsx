import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/stage.module.css";
import Richard from "../Richard";
import micro from "@/assets/micro.png";
import Liany from "../Liany";

const Singing = () => {
  return (
    <div className={`relative w-full h-screen ${styles.stage}`}>
      {/* <Image
        src={"/stage.webp"}
        alt="stage"
        width={920}
        height={1080}
        className="absolute min-w-[2920px] min-h-[1080px]"
      /> */}
      <Liany
        state="smiling"
        className="top-[60px] left-1/2 -translate-x-1/2 absolute"
      />
      <Image
        src={micro}
        alt="micro"
        className="absolute w-28 top-[330px] left-[40%] -translate-x-1/2"
      />
    </div>
  );
};

export default Singing;
