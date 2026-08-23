export default function PhotoFeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Photo Feed Layout</h1>
      {children}
      {modal}
    </div>
  );
}
