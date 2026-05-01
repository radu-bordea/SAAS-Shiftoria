"use client";

import { employees, weeklyHours } from "@/lib/mock-data";

type Props = {
  mode?: "admin" | "employee";
  userId?: string;
};

const Hours = ({ mode = "admin", userId }: Props) => {
  if (mode === "employee" && userId) {
    const employee = employees.find((e) => e.id === userId);
    const hoursData = weeklyHours.find((w) => w.employeeId === userId);

    if (!employee || !hoursData) {
      return (
        <div className="p-6 text-muted-foreground">
          No data found
        </div>
      );
    }

    const daily = Object.entries(hoursData.hours);

    const totalHours = daily.reduce(
      (sum, [, val]) => sum + val,
      0
    );

    return (
      <div className="p-6 space-y-8 bg-background min-h-screen text-foreground">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">
            Hours Evolution
          </h1>
          <p className="text-sm text-muted-foreground">
            Weekly overview of your working hours
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Employee" value={employee.name} />
          <Card title="Week Total Hours" value={`${totalHours}h`} />
          <Card
            title="Department"
            value={employee.department}
          />
        </div>

        {/* DAILY BREAKDOWN */}
        <div className="rounded-2xl border bg-muted p-4">
          <h2 className="font-semibold mb-4">
            Daily Breakdown
          </h2>

          <div className="space-y-3">
            {daily.map(([day, value]) => (
              <div
                key={day}
                className="flex items-center justify-between"
              >
                <p className="capitalize text-sm w-24">
                  {day}
                </p>

                <div className="flex items-center gap-3 flex-1">
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${(Number(value) / 10) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-sm w-10 text-right">
                    {value}h
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHART */}
        <div className="rounded-2xl border bg-muted p-6">
          <h2 className="font-semibold mb-2">
            Chart Preview
          </h2>
          <p className="text-sm text-muted-foreground">
            (This will become a Recharts line chart)
          </p>

          <div className="h-40 flex items-center justify-center text-muted-foreground/40">
            Chart Placeholder
          </div>
        </div>
      </div>
    );
  }

  const data = employees.map((emp) => {
    const record = weeklyHours.find(
      (w) => w.employeeId === emp.id
    );

    const total =
      record?.hours
        ? Object.values(record.hours).reduce(
            (a, b) => a + b,
            0
          )
        : 0;

    return {
      name: emp.name,
      hours: total,
    };
  });

  const totalCompanyHours = data.reduce(
    (sum, e) => sum + e.hours,
    0
  );

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* TOP STATS */}
      <section className="flex m-4 gap-3">
        <StatCard
          title="Total Hours (Week)"
          value={`${totalCompanyHours}h`}
        />
        <StatCard
          title="Active Employees"
          value={
            employees.filter(
              (e) => e.status === "ACTIVE"
            ).length
          }
        />
        <StatCard
          title="Avg Hours / Employee"
          value={Math.round(
            totalCompanyHours / employees.length
          )}
        />
        <StatCard title="Departments" value="4" />
      </section>

      {/* CHARTS */}
      <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-80 bg-muted border rounded-2xl p-4">
          <h2 className="font-semibold mb-2">
            Weekly Hours Overview
          </h2>
        </div>

        <div className="w-1/2 h-80 bg-muted border rounded-2xl p-4">
          <h2 className="font-semibold mb-2">
            Employee Distribution
          </h2>
        </div>
      </section>

      {/* EMPLOYEE BREAKDOWN */}
      <section className="flex my-4 px-4 gap-3">
        {data.map((emp) => (
          <div
            key={emp.name}
            className="w-1/3 bg-muted border rounded-2xl p-4"
          >
            <p className="font-medium">{emp.name}</p>
            <p className="text-2xl font-bold mt-2">
              {emp.hours}h
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hours;

/* CARD */

const Card = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="border rounded-2xl p-4 bg-muted">
    <p className="text-sm text-muted-foreground">
      {title}
    </p>
    <p className="text-lg font-semibold mt-1">{value}</p>
  </div>
);

/* STAT CARD */

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="flex-1 bg-muted border rounded-2xl p-4">
    <p className="text-sm text-muted-foreground">
      {title}
    </p>
    <p className="text-xl font-bold mt-2">{value}</p>
  </div>
);