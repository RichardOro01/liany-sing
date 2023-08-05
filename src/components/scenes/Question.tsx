import React, { useState } from "react";
import Dialog from "../Dialog";
import Richard, { RichardState } from "../Richard";
import { useDispatch } from "react-redux";
import { setScene, setTransition } from "@/core/stores/scene";
import JSConfetti from "js-confetti";

const Question = () => {
  const dispatch = useDispatch();
  const [preNo, setPreNo] = useState(false);
  const [dialoging, setDialoging] = useState(false);
  const [state, setState] = useState<RichardState>("smiling");

  const handleYes = () => {
    setState("happy");
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ confettiNumber: 1000 });
    finish();
  };
  const handlePreNo = () => {
    setPreNo(true);
    setState("sad");
  };
  const handleNo = () => {
    setState("cry");
    finish();
  };

  const finish = () => {
    setTimeout(() => {
      dispatch(setTransition(true));
      setTimeout(() => {
        dispatch(setScene(""));
        dispatch(setTransition(false));
      }, 1000);
    }, 3000);
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Richard state={dialoging ? "talking" : state} />
      {state !== "happy" && state !== "cry" && (
        <>
          {!preNo && (
            <Dialog
              texts={[
                "Vaya, de verdad que cantas lindo.",
                "Solo quiero saber una cosa...",
                "Podré escucharte cantar en la vida real estas vacaciones?",
              ]}
              {...{ setDialoging }}
              options={[
                { text: "Claro!", action: handleYes },
                { text: "Nop", action: handlePreNo },
              ]}
            />
          )}
          {preNo && (
            <Dialog
              texts={["Oh, pues soy una persona triste :/"]}
              {...{ setDialoging }}
              options={[
                { text: "Era broma, claro que sí!", action: handleYes },
                {
                  text: "Lo siento, ponte a escuchar el audio repetido y ya.",
                  action: handleNo,
                },
              ]}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Question;
