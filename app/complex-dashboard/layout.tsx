import CardForDashBoard from "@/app/components/CardForDashBoard";
export default function Layout({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div className="space-y-6 p-6">
      <div>{children}</div>
      <div className="grid gap-6 md:grid-cols-2">
        <CardForDashBoard>{users}</CardForDashBoard>
        <CardForDashBoard>{notifications}</CardForDashBoard>
      </div>
      <CardForDashBoard>{revenue}</CardForDashBoard>
    </div>
  );
}
