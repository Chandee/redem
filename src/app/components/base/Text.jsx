import React from "react";
import { cva } from "cva";

const Text = ({ textType = "p", sizes, children, className = "", props }) => {
  const TextTag = `${textType}`;

  const textStyles = cva("font-montserrat", {
    variants: {
      sizes: {
        B1: "text-b1",
        B2: "text-b2",
        L1: "text-l1",
        L2: "text-l2",
        S1: "text-s1",
        C1: "text-c1",
        C2: 'text-c2'
      },
    },
    defaultVariants: {
      sizes: "B1",
    },
  });

  const combinedStyles = `${textStyles({ sizes })} ${className}`;

  return (
    <TextTag className={combinedStyles} {...props}>
      {children}
    </TextTag>
  );
};

export default Text;
