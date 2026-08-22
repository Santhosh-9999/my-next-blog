export default function interceptedF4() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  return (
    <div style={style}>
      <h1 className="text-3xl font-bold mb-4">Intercepted F4</h1>
      <p className="text-lg text-gray-600">
        (..)(..) This is the intercepted F4 page.
      </p>
    </div>
  );
}
