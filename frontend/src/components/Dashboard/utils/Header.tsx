import React, { FC } from "react";

interface HeaderProps {
  name: string;
  description?: string;
}

const Header: FC<HeaderProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col ">
      <span className="font-semibold leading-6">{name}</span>
      <span className="text-[12px] text-gray-600 leading-0 capitalize">{description}</span>
    </div>
  );
};

export default Header;
