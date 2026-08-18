export const metadata = {
  title: "Profile - My Next Blog",
  description: "Profile page",
};

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-slate-200 rounded-full flex-shrink-0" />
        <div>
          <h1 className="text-2xl font-bold">Santhosh Kumar</h1>
          <p className="text-slate-600">
            Frontend Engineer • Curious about UX and performance
          </p>
        </div>
      </div>

      <p className="mt-6 text-slate-700">
        I build small, maintainable web apps and write about what I learn along
        the way. I enjoy simplifying complex ideas and improving developer
        experience.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">Contact</h2>
        <div className="flex gap-4 text-sm">
          <a
            href="mailto:santhoshsky.ui@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            santhoshsky.ui@gmail.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
