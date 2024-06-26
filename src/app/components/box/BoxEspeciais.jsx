import React from "react";
import Image from "next/image";
import Text from "../base/Text";
import ChipContainer from "../ChipContainer";
import Button from "../base/Button";
import Heading from "../base/Heading";

const BoxEspeciais = ({
  imagem,
  customHeight = 276,
  className,
  titulo,
  subtitulo,
  link,
}) => {
  return (
    <div
      className={`flex flex-col  bg-white w-[302px] items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className={`w-full h-[150px] relative `}>
        <Image
          src={imagem}
          layout="fill"
          objectFit="cover"
          className="rounded-t-[10px]"
        />
      </div>
      <div className="pt-[15px] px-[20px] pb-[20px] ">
        <div className="pb-[18px]">
          <ChipContainer>Leitura de 3min </ChipContainer>
          <ChipContainer>Categoria Aqui </ChipContainer>
        </div>
        <Heading headingLevel={2} sizes={"H6"} className="font-bold mb-[6px]">
          {titulo}
        </Heading>
        <div>
          <Text sizes={"B2"} className=" flex-1 mb-3">
            {subtitulo}
          </Text>
        </div>
        <Text textType="a" sizes={"C1"} className="font-bold text-laranja flex">
          LEIA MAIS
          <div className="ml-4">
            <Image
              src={"/img/voltarIcon.svg"}
              height={16}
              width={16}
              className="h-4 w-4"
            />
          </div>
        </Text>
      </div>
    </div>
  );
};

export default BoxEspeciais;
