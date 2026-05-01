"use client";

import { employees } from "@/lib/mock-data";

const StaffPage = () => {
  const activeEmployees = employees.filter(
    (e) => e.status === "ACTIVE"
  );

  const offEmployees = employees.filter(
    (e) => e.status !== "ACTIVE"
  );

  return (
    <div className="p-6 space-y-10 bg-background min-h-screen text-foreground">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Staff</h1>
        <p className="text-sm text-muted-foreground">
          Manage and view employees in your organization
        </p>
      </div>

      {/* ACTIVE */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Active Employees ({activeEmployees.length})
        </h2>

        <StaffTable data={activeEmployees} />
      </section>

      {/* INACTIVE */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-muted-foreground">
          Inactive Employees ({offEmployees.length})
        </h2>

        <StaffTable data={offEmployees} dimmed />
      </section>
    </div>
  );
};

export default StaffPage;

/* ---------------- TABLE ---------------- */

const StaffTable = ({
  data,
  dimmed = false,
}: {
  data: any[];
  dimmed?: boolean;
}) => {
  return (
    <div className="rounded-2xl border bg-muted overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-background border-b">
          <tr>
            <th className="text-left p-4">Employee</th>
            <th className="text-left p-4">Department</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((employee) => (
            <tr
              key={employee.id}
              className={`border-b hover:bg-background/70 transition-colors ${
                dimmed ? "opacity-60" : ""
              }`}
            >
              <td className="p-4">
                <div>
                  <p className="font-medium">
                    {employee.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {employee.email}
                  </p>
                </div>
              </td>

              <td className="p-4">
                {employee.department}
              </td>

              <td className="p-4">{employee.role}</td>

              <td className="p-4">
                <StatusBadge
                  status={employee.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ---------------- BADGE ---------------- */

const StatusBadge = ({
  status,
}: {
  status: string;
}) => {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border ${
        isActive
          ? "bg-primary/15 text-primary border-primary/20"
          : "bg-background text-muted-foreground border-border"
      }`}
    >
      {status}
    </span>
  );
};