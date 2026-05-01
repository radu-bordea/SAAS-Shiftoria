import { auth } from "@clerk/nextjs/server";

const tasks = [
  { id: 1, title: "Task 1", description: "Description 1" },
  { id: 2, title: "Task 2", description: "Description 2" },
  { id: 3, title: "Task 3", description: "Description 3" },
];

async function TaskList() {
  const { has } = await auth();

  // Check if the user has the permission to read tasks on server
  const canRead = has?.({
    permission: "org:tasks:read",
  });

  if (!canRead) {
    return <div>You do not have permission to read tasks</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}


export default TaskList