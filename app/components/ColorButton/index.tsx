import React from "react";

type ColorButtonProps = {
  color: string;
};

export const ColorButton = ({ color }: ColorButtonProps) => {
  return (
    <span
      className="w-4 h-4 rounded-full"
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default ColorButton;
