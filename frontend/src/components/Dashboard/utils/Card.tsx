import React, { FC } from "react";

interface CardProps {
  name: String;
  val: String | Number;
}

const Card:FC<CardProps> = ({name,val}) => {
  return <div style={{padding:"30px 10px"}} className="shadow-inner rounded h-auto w-[30%] bg-gray-800/10 flex flex-col items-center justify-center">
    <span className="font-semibold text-[#014734] text-2xl">
      {name}
    </span>
    <span className="font-normal text-[#568336] ">
      {val as number}
    </span>
  </div>;
};

export default Card;
