import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const TodosTable = await sql`CREATE TABLE Todos (
        todo_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        category_id INT,
        due_date DATE,
        is_completed BOOLEAN DEFAULT false,
        FOREIGN KEY (category_id) REFERENCES Categories(category_id)
    );`;

    return NextResponse.json({ TodosTable }, { status: 200 });

    // return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
