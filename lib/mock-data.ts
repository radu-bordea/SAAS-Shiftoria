// lib/mock-data.ts

export type Employee = {
  id: string
  name: string
  email: string
  role: "ADMIN" | "EMPLOYEE"
  department: string
  status: "ACTIVE" | "OFF"
}

export type WeeklyHours = {
  employeeId: string
  week: string
  hours: {
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
  }
}

export const employees: Employee[] = [
  {
    id: "emp_1",
    name: "John Carter",
    email: "john@shiftoria.com",
    role: "ADMIN",
    department: "Operations",
    status: "ACTIVE",
  },
  {
    id: "emp_2",
    name: "Emma Wilson",
    email: "emma@shiftoria.com",
    role: "EMPLOYEE",
    department: "Sales",
    status: "ACTIVE",
  },
  {
    id: "emp_3",
    name: "Michael Brown",
    email: "michael@shiftoria.com",
    role: "EMPLOYEE",
    department: "Support",
    status: "ACTIVE",
  },
  {
    id: "emp_4",
    name: "Sophia Martinez",
    email: "sophia@shiftoria.com",
    role: "EMPLOYEE",
    department: "Support",
    status: "OFF",
  },
  {
    id: "emp_5",
    name: "Daniel Moore",
    email: "daniel@shiftoria.com",
    role: "EMPLOYEE",
    department: "Warehouse",
    status: "ACTIVE",
  },
]

export const weeklyHours: WeeklyHours[] = [
  {
    employeeId: "emp_1",
    week: "2026-W18",
    hours: {
      monday: 8,
      tuesday: 8,
      wednesday: 7,
      thursday: 8,
      friday: 6,
      saturday: 0,
      sunday: 0,
    },
  },
  {
    employeeId: "emp_2",
    week: "2026-W18",
    hours: {
      monday: 8,
      tuesday: 8,
      wednesday: 8,
      thursday: 8,
      friday: 8,
      saturday: 4,
      sunday: 0,
    },
  },
  {
    employeeId: "emp_3",
    week: "2026-W18",
    hours: {
      monday: 6,
      tuesday: 8,
      wednesday: 8,
      thursday: 7,
      friday: 8,
      saturday: 0,
      sunday: 0,
    },
  },
  {
    employeeId: "emp_4",
    week: "2026-W18",
    hours: {
      monday: 0,
      tuesday: 0,
      wednesday: 8,
      thursday: 8,
      friday: 8,
      saturday: 0,
      sunday: 0,
    },
  },
  {
    employeeId: "emp_5",
    week: "2026-W18",
    hours: {
      monday: 9,
      tuesday: 8,
      wednesday: 9,
      thursday: 8,
      friday: 8,
      saturday: 5,
      sunday: 0,
    },
  },
]

export const totalHoursChart = employees.map((employee) => {
  const record = weeklyHours.find((w) => w.employeeId === employee.id)

  const total = record
    ? Object.values(record.hours).reduce((sum, h) => sum + h, 0)
    : 0

  return {
    name: employee.name,
    hours: total,
  }
})

export const weeklyOverviewChart = [
  { day: "Mon", hours: 31 },
  { day: "Tue", hours: 32 },
  { day: "Wed", hours: 40 },
  { day: "Thu", hours: 39 },
  { day: "Fri", hours: 38 },
  { day: "Sat", hours: 9 },
  { day: "Sun", hours: 0 },
]

export const departmentDistribution = [
  { name: "Operations", employees: 1 },
  { name: "Sales", employees: 1 },
  { name: "Support", employees: 2 },
  { name: "Warehouse", employees: 1 },
]

export const attendanceStats = [
  { name: "On Time", value: 78 },
  { name: "Late", value: 14 },
  { name: "Absent", value: 8 },
]