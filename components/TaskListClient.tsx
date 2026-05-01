'use client'

import { useAuth } from "@clerk/nextjs";

const tasks = [
  { id: 1, title: "Task 1", description: "Description 1" },
  { id: 2, title: "Task 2", description: "Description 2" },
  { id: 3, title: "Task 3", description: "Description 3" },
];

function TaskListClient() {
  const { has, isLoaded } = useAuth()

  // Check if the user has the permission to read tasks on server
  const canRead = has?.({
    feature: "tasks",
  });

if(!isLoaded) {
  return <div>Loading...</div>
}

  if (!canRead) {
    return <div>You do not have permission to read tasks</div>;
  }

  return (
    <div className="bg-red-300">
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}


export default TaskListClient