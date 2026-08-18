export const metadata = {
  title: "About - My Next Blog",
  description: "About this demo blog",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">About This Site</h1>
      <p className="text-slate-700 mb-4">
        This is a small demo blog built with Next.js and Tailwind CSS. It
        demonstrates simple layouts, dynamic routes, and server-side data
        fetching from a placeholder API.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Mission</h2>
      <p className="text-slate-600">
        Share concise tutorials, notes, and experiments about web development.
        The goal is clarity and practicality — short, focused posts you can
        reuse.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Technologies</h2>
      <ul className="flex flex-wrap gap-3 mt-2">
        <li className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full shadow-sm">
          Next.js
        </li>
        <li className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full shadow-sm">
          React
        </li>
        <li className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full shadow-sm">
          TypeScript
        </li>
        <li className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full shadow-sm">
          Tailwind CSS
        </li>
      </ul>
    </div>
  );
}
