import ConnectMongoDb from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description } = await req.json();
  await ConnectMongoDb();
  await Task.create({ title, description });

  return NextResponse.json({ message: "Task Created" }, { status: 201 });
}

export async function GET() {
  await ConnectMongoDb();
  const tasks = await Task.find();
  return NextResponse.json({ tasks });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await ConnectMongoDb();
  await Task.findByIdAndDelete(id);

  return NextResponse.json({ message: "Task Deleted" }, { status: 200 });
}
