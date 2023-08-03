import ConnectMongoDb from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await ConnectMongoDb();
  await Task.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Task Updated." }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await ConnectMongoDb();
  const task = await Task.findOne({ _id: id });

  return NextResponse.json({ task }, { status: 200 });
}
