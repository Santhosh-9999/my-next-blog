import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Archived Notifications</h1>
      <Link href="/complex-dashboard">Back to Notifications</Link>
    </>
  );
}
