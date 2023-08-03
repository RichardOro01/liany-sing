import Image from "next/image";
import styles from "../styles/neon.module.css";
import { Button } from "antd";
import Dialog from "@/components/Dialog";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 py-14`}
    >
      <div
        className={`border-4 border-pink-400 p-12 rounded-2xl flex flex-col justify-center items-center gap-8 animate-pulse animate-infinite animate-ease-linear`}
      >
        <h1
          className={`font-semibold text-5xl font-[cursive] ${styles.neonText}`}
        >
          Liany
        </h1>
        <h2
          className={`font-semibold text-3xl font-[cursive] ${styles.neonText}`}
        >
          Superstar
        </h2>
      </div>
      <Button size="large" className="!px-20">
        Play
      </Button>
      <Dialog texts={["Holaaaaaaaa", "Como estasss?", "Muy biennnnn"]} />
    </main>
  );
}
