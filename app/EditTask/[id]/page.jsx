import EditTaskForm from "@/components/EditTaskForm";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { task } = await getTopicById(id);
  const { title, description } = task;
  return <EditTaskForm id={id} title={title} description={description} />;
}
