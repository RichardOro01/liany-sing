import React, { useState } from "react";
import Dialog from "../Dialog";
import Richard from "../Richard";

const Hello = () => {
  const [dialoging, setDialoging] = useState(false);
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
      />
    </div>
  );
};

export default Hello;
