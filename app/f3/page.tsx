import Link from "next/link";

export default function F3() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  return (
    <div style={style}>
      <h1 className="text-3xl font-bold mb-4"> F3</h1>
      <Link href="/f4">Go to intercepted F4</Link>
    </div>
  );
}
