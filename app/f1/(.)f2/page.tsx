export default function interceptedF2() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  return (
    <div>
      <h1 style={style} className="text-3xl font-bold mb-4">
        {" "}
        (.)Intercepted F2
      </h1>
    </div>
  );
}
