import Link from "next/link";
export default function Notifications() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <Link href="complex-dashboard/archivednotifications">
        View Archived Notifications
      </Link>
    </>
  );
}
