import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Staff</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">
          12
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Hours</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">
          320
        </CardContent>
      </Card>
    </div>
  );
}
