import Image from "next/image";

const Icon = ({imagem, width}) => {
  return (
    <div className="flex relative w-9 h-9 bg-laranja rounded-[10px] items-center justify-center" >
      <Image src={imagem} height={12} width={width} />
    </div>
  );
};

export default Icon;
