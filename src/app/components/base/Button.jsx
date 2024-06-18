import React from "react";
import { cva } from "cva";
import { defaultConfig } from "next/dist/server/config-shared";

const Button = ({ buttonStyle, children }) => {
  /* to do
    adicionar outros estilos
*/ const buttonStyles = cva("font-montserrat", {
    variants: {
      buttonStyle: {
        preto: "bg-black py-[12px] px-[28px] rounded-[10px]",
        laranja: "bg-laranja py-[12px] px-[28px] rounded-[10px] text-white",
        laranjaSmall: "bg-laranja py-[7px] px-[28px] rounded-[10px] text-white",
      },
    },
    defaultVariants: {
      buttonStyle: "preto",
    },
  });

  return <button className={buttonStyles({ buttonStyle })}>{children}</button>;
};

export default Button;
