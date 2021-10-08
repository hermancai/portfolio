import Image from "next/image";

function SkillTable({ name, imgPath }) {
  return (
    <div className="flex space-x-2 rounded-md bg-gray-900 py-2 px-3 m-1 lg:m-2">
      <Image src={imgPath} height={25} width={25} />
      <p>{name}</p>
    </div>
  );
}

export default SkillTable;
