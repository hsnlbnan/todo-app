import Image from "next/image";
import { Input, Item } from "./components";
import { useFormState } from "react-dom";
import { createTodo } from "./api/createTodo/route";

export default function Home() {
  return (
    <>
      <Input />
    </>
  );
}
