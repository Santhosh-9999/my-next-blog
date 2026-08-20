export default function CardForDashBoard({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    color: "black",
  };
  return <div style={styles}>{children}</div>;
}
