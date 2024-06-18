import React from "react";
import { cva } from "cva";

const Display = ({ displayStyle, children }) => {
  const displayStyles = cva("font-montserrat", {
    variants: {
      displayStyle: { D1: "text-d1 font-bold", D2: "text-d2 font-medium" },
    },
  });

  return (
    <h1 className={displayStyles({ displayStyle })}>
      {children}
    </h1>
  );
};

export default Display;
