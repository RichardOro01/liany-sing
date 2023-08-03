import { RootState } from "@/core/stores/store";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Transition = () => {
  const transition = useSelector((state: RootState) => state.scene.transition);
  const [show, setShow] = useState<boolean>();
  useEffect(() => {
    if (transition) {
      setShow(true);
    } else {
      if (show) setTimeout(endTransition, 2000);
    }
  }, [transition]);

  const endTransition = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <>
          {transition && (
            <div className="fixed top-0 left-0 h-screen w-screen bg-white z-50 animate-fade-down"></div>
          )}
          {!transition && (
            <div className="fixed top-0 left-0 h-screen w-screen bg-white z-50 animate-fade-down animate-reverse"></div>
          )}
        </>
      )}
    </>
  );
};

export default Transition;
