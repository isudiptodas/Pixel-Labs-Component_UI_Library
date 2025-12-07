import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { filePath } = await req.json();

    const absolutePath = path.join(process.cwd(), filePath);
    const code = fs.readFileSync(absolutePath, "utf-8");

    return NextResponse.json({ code });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read file", details: String(error) },
      { status: 500 }
    );
  }
}
