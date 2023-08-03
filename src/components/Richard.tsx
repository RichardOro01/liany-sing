import React from "react";
import Image from "next/image";
import idle from "../assets/sprites/Richard/idle.png";
import arm from "../assets/sprites/Richard/arm.png";
import styles from "../styles/hello.module.css";

const Richard: React.FC = () => {
  return (
    <div className="relative h-96 w-80">
      <Image src={idle} alt="Richard" className="absolute" />
      <Image
        src={arm}
        alt="arm"
        className={`absolute top-64 left-20 w-16 ${styles.hello}`}
      />
    </div>
  );
};

export default Richard;
