"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTask = async () => {
    const confirmed = confirm(
      "Are you sure you would like to remove the task?"
    );

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) router.refresh();
    }
  };
  return (
    <button onClick={removeTask} className=" text-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
