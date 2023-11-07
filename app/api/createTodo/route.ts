import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";

const todo_schema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  category_id: z.number(),
  due_date: z.date().default(new Date()),
  is_completed: z.boolean().default(false),
});

type todo_schema = z.infer<typeof todo_schema>;

export async function createTodo(prevState, queryData) {
  let data = {
    title: queryData.get("title"),
    description: queryData.get("description"),
    category_id: Number(queryData.get("category_id")),
    due_date:
      queryData.get("due_date") !== "" ? queryData.get("due_date") : new Date(),
    is_completed:
      queryData.get("is_completed") !== ""
        ? queryData.get("is_completed")
        : false,
  };

  const validatedData = todo_schema.parse(data);

  try {
    await sql`INSERT INTO Todos (title, description, category_id, due_date, is_completed) VALUES (${
      validatedData.title
    }, ${validatedData.description}, ${
      validatedData.category_id
    }, ${validatedData.due_date.toISOString()}, ${validatedData.is_completed})`;
    revalidatePath("/");
    console.log("TODO CREATED");
    return { message: "Todo created successfully" };
  } catch (e) {
    console.log("ERROR", e);
    return { message: "Failed to create todo" };
  }
}
