"use client";
export default function error(error: Error) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{error.message}</h1>
      <p className="text-slate-700 mb-4">
        An error occurred while loading the post.
      </p>
    </div>
  );
}
