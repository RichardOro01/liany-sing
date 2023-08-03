import React, { useState } from "react";
import Dialog from "../Dialog";
import Richard from "../Richard";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";

const Hello = () => {
  const dispatch = useDispatch();
  const [dialoging, setDialoging] = useState(false);
  const handleNext = () => {
    dispatch(setTransition(true));

    setTimeout(() => {
      dispatch(setScene("singing"));
      dispatch(setTransition(false));
    }, 1000);
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Richard state={dialoging ? "talking" : "smiling"} />
      <Dialog
        texts={[
          "Hola Liany!",
          "Me han informado que eres una super estrella...",
          "He conseguido un lugar para que demuestres tu talento!",
          "Vamos!",
        ]}
        {...{ setDialoging }}
        options={[{ text: "Vamos!", action: handleNext }]}
      />
    </div>
  );
};

export default Hello;
