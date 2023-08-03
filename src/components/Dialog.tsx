import React, { useState, useEffect } from "react";

interface DialogProps {
  texts: string[];
  setDialoging: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dialog: React.FC<DialogProps> = ({ texts, setDialoging }) => {
  const [currentText, setCurrentText] = useState(0);
  const [showingText, setShowingText] = useState("");
  const [timer, setTimer] = useState<NodeJS.Timer>();

  useEffect(() => {
    startTimer();
    return () => killTimer();
  }, []);

  useEffect(() => {
    if (showingText.length < texts[currentText].length) {
      setDialoging(true);
      startTimer();
    } else {
      setDialoging(false);
      setTimer(setTimeout(nextText, 2000));
    }
  }, [showingText]);

  const startTimer = () => {
    setTimer(setTimeout(nextCharacter, 50));
  };

  const nextCharacter = () => {
    setShowingText((showingText) =>
      texts[currentText].substring(0, showingText.length + 1)
    );
  };

  const killTimer = () => {
    if (timer) clearInterval(timer);
    setTimer(void 0);
  };

  const skipTimer = () => {
    killTimer();
    if (isShowingTextCompleted()) {
      nextText();
    } else {
      setShowingText(texts[currentText]);
    }
  };

  const nextText = () => {
    if (texts.length > currentText + 1) {
      setCurrentText(currentText + 1);
      setShowingText("");
      startTimer();
    }
  };

  const isShowingTextCompleted = () => {
    return showingText.length === texts[currentText].length;
  };

  return (
    <div
      className="fixed bottom-5 mx-5 p-4 border-2 shadow-lg rounded-lg bg-slate-50 w-11/12 min-h-[60px] z-40"
      onClick={skipTimer}
    >
      {showingText}
    </div>
  );
};

export default Dialog;
