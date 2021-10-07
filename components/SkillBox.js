import Image from "next/image";

function SkillTable({ name, imgPath }) {
  return (
    <div className="flex flex-col justify-center items-center rounded-md border-2 border-red-500 min-w-[150px] p-2 m-3 bg-gray-800">
      <Image src={imgPath} height={50} width={50} />
      {name}
    </div>
  );
}

export default SkillTable;
