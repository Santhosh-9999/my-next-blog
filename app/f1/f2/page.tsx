import Link from "next/link";

export default function f2() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <h1>This is the F2 page</h1>
      <div>
        <Link href="/f3">Go to F3</Link>
        <Link href="/f4">Go to F4</Link>
      </div>
    </div>
  );
}
