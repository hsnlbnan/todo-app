import React from "react";
import { ColorButton } from "..";

export const Item = () => {
  return (
    <div className="w-[500px] bg-white relative px-4 py-3 flex items-center justify-between rounded-md mb-4">
      <div className="flex items-center justify-center gap-2">
        <ColorButton color={"orange"} />
        <p className="text-sm font-medium text-gray-500">Workout</p>
      </div>

      <button className="text-gray-400 hover:text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Item;
