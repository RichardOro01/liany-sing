import React from "react";
import Dialog from "../Dialog";
import Richard from "../Richard";

const Hello = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Richard />
      <Dialog
        texts={[
          "Hola Liany!",
          "Me han informado que eres una super estrella...",
          "He conseguido un lugar para que demuestres tu talento!",
          "Vamos!",
        ]}
      />
    </div>
  );
};

export default Hello;
