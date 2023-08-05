import React, { useState } from "react";
import Dialog from "../Dialog";
import Richard from "../Richard";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";

const Hello = () => {
  const dispatch = useDispatch();

  const [dialoging, setDialoging] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const handleNext = () => {
    dispatch(setTransition(true));

    setTimeout(() => {
      dispatch(setScene("singing"));
    }, 1000);
  };

  const handleLoad = () => {
    setTimeout(() => {
      setLoaded(true);
      setGreeting(true);
    }, 1000);
    dispatch(setTransition(false));
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Richard
        state={dialoging ? "talking" : "smiling"}
        onLoad={handleLoad}
        {...{ greeting }}
      />
      {loaded && (
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
      )}
    </div>
  );
};

export default Hello;
