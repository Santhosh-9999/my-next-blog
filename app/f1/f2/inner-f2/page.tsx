import Link from "next/link";

export default function InnerF2() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  return (
    <div style={style}>
      <h1 className="text-3xl font-bold mb-4">Inner F2</h1>
      <div>
        <Link href="/f5">Go to F5</Link>
      </div>
    </div>
  );
}
