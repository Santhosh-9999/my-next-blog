import Link from "next/link";
import CardForDashBoard from "../components/CardForDashBoard";
export default function f1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      {/* <CardForDashBoard> */}
      <h1>This is the F1 page</h1>
      <div>
        <Link href="/f1/f2">Go to F2</Link>
      </div>

      {/* </CardForDashBoard> */}
    </div>
  );
}
