import React from "react";
import Image from "next/image";
import Text from "../base/Text";

const BoxFerramenta = ({ imagem, titulo, subtitulo, link }) => {
  return (
    <div className="flex flex-col bg-white h-[312px] w-[295px] py-9 px-6 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <Image src={imagem} width={180} height={110} />
      <Text sizes={"B1"} className="font-bold text-center">
        {titulo}
      </Text>
      <Text sizes={"B2"} className="text-center">
        {subtitulo}
      </Text>
      <Text textType="a" sizes={"C2"} href={link} className="mt-auto text-laranja">
        Acessar Ferramenta
      </Text>
    </div>
  );
};

export default BoxFerramenta;
