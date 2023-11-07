import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const CategoriesTable = await sql`CREATE TABLE IF NOT EXISTS Categories (
      category_id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      color_code VARCHAR(7) NOT NULL
       );`;

    return NextResponse.json({ CategoriesTable }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
