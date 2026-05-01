import TaskList from "@/components/TaskList";
import TaskListClient from "@/components/TaskListClient";
import { Button } from "@/components/ui/button";
import { PricingTable } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { orgId, orgRole, orgPermissions, has } = await auth();
  console.log(orgId, orgRole, orgPermissions);

  const canWrite = has({ permission: "org:tasks:write" });

  return (
    <div className="flex flex-col min-h-[60vh] items-center justify-center gap-6 px-4">
      <h1>Hello from SHIFTORIA!</h1>
      <h2>
        Organization Role: {orgRole} ({orgPermissions})
      </h2>
      {/* <Button disabled={!canWrite} className="bh-blue-500 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
        {canWrite ? "Can Write" : "Cannot Write"}
      </Button> */}

      {/* <TaskList/>
      <TaskListClient/> */}

      <PricingTable for="organization"/>
    </div>
  );
}
