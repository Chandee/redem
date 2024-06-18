import React from "react";
import Image from "next/image";
import Text from "../base/Text";
import Heading from "../base/Heading";

const BoxData = ({ numero, texto, titulo, link }) => {
  return (
    <div className="flex flex-col bg-white h-[193px] w-[298px] p-5  rounded-[10px] ">
      <Heading headingLevel={3} className="font-bold text-laranja">
        {numero}
      </Heading>
      <Text className=" text-[18px] text-laranja font-bold pb-[10px]">
        {titulo}
      </Text>
      <Text sizes={"B2"} className="mt-auto ">
        {texto}
      </Text>
    </div>
  );
};

export default BoxData;
