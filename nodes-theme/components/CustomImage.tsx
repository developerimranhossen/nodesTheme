import Image from "next/image";


function CustomImage({path}) {
  return (
    <div className="relative w-[586px] h-[358px]">
      <Image src={path} fill alt=""/>
    </div>
  );
}

export default CustomImage;
