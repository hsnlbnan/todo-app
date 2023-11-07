"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ColorButton } from "..";

type MenuItemProps = {
  title: string;
  active?: boolean;
  color?: string;
  onClick?: () => void;
};

const MenuItem = ({
  title,
  active,
  color = "#e2e2e2",
  onClick,
}: MenuItemProps) => {
  return (
    <li
      className={cn(
        "flex items-center gap-2",
        active && "border-b border-gray-500"
      )}
      onClick={onClick}
    >
      <ColorButton color={color} />
      {title}
    </li>
  );
};

export const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState(1);

  const onClick = (id: number) => {
    setActiveItem(id);
  };

  const dummyMenuItems = [
    {
      id: 1,
      title: "Work",
      color: "#E698AD",
    },
    {
      id: 2,
      title: "Freelance",
      color: "#ECC530",
    },
    {
      id: 3,
      title: "Contact",
      color: "#81D3F2",
    },
  ];

  return (
    <nav className="w-[280px] bg-white h-screen flex items-center ">
      <ul className="flex items-start gap-3 p-8 flex-col">
        {dummyMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            color={item.color}
            active={activeItem === item.id}
            onClick={() => onClick(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
