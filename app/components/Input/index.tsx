"use client";
import React from "react";
import { ColorButton } from "..";
import { useFormState } from "react-dom";
import { createTodo } from "@/app/api/createTodo/route";

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

// const todo_schema = z.object({
//   title: z.string(),
//   description: z.string(),
//   category_id: z.number(),
//   due_date: z.date(),
//   is_completed: z.boolean(),
// });

export const Input = () => {
  const [message, formAction] = useFormState(createTodo, null);

  return (
    <>
      <form
        className="w-[500px] bg-white relative px-4 py-3 flex items-center justify-between rounded-md mb-12"
        action={formAction}
      >
        <div className="flex items-center justify-center gap-2">
          {dummyMenuItems.map((item) => (
            <ColorButton key={item.id} color={item.color} />
          ))}
        </div>
        <input type="hidden" name="description" value={""} />
        <input type="hidden" name="category_id" value={0} />
        <input type="hidden" name="due_date" />
        <input type="hidden" name="is_completed" />

        <input
          className="flex-1 bg-transparent outline-none border-none pl-3"
          placeholder="What is your new task?"
          name="title"
        />
        <button className="text-gray-400 hover:text-gray-500" type="submit">
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
      </form>
      {message && (
        <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2">
          {message?.message}
        </div>
      )}
    </>
  );
};

export default Input;
