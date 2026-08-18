export const metadata = {
  title: "Home - My Next Blog",
  description: "Demo Next.js blog with Tailwind CSS",
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">Welcome Home!</h1>

      <p className="text-slate-700 mb-6">
        This workspace is a small Next.js + Tailwind demo blog. Below is a short
        status of what has been implemented and planned next steps.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What's Done</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Shared layout with header/footer added in{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/layout.tsx"
            >
              root layout
            </a>
            .
          </li>
          <li>
            Responsive posts index and post pages with layouts — see the
            <a
              className="text-indigo-600 hover:underline"
              href="/app/posts/page.tsx"
            >
              {" "}
              posts index
            </a>{" "}
            and
            <a
              className="text-indigo-600 hover:underline"
              href="/app/posts/%5BpostId%5D/page.tsx"
            >
              {" "}
              post page
            </a>
            .
          </li>
          <li>
            Reusable `Header` and `Footer` components:{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/components/Header.tsx"
            >
              Header
            </a>
            ,{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/components/Footer.tsx"
            >
              Footer
            </a>
            .
          </li>
          <li>
            `about` and `profile` pages with simple styles:{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/about/page.tsx"
            >
              About
            </a>
            ,{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/profile/page.tsx"
            >
              Profile
            </a>
            .
          </li>
          <li>
            Fetch helpers created in{" "}
            <a
              className="text-indigo-600 hover:underline"
              href="/app/lib/fetchPosts.ts"
            >
              app/lib/fetchPosts.ts
            </a>
            . (Note: consider consolidating to root `lib/`.)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Planned / Next</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Consolidate fetch helpers into a single `lib/fetchPosts.ts` at the
            repo root.
          </li>
          <li>
            Decide header variant strategy (root header with per-page hero vs
            per-layout header) and standardize.
          </li>
          <li>
            Add global design tokens and tidy `globals.css` / Tailwind config.
          </li>
          <li>
            Add loading and error states for network requests and small SEO
            metadata per page.
          </li>
          <li>
            Create a `README.md` / `ROADMAP.md` documenting completed and
            planned work.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">How to run</h2>
        <pre className="bg-slate-100 rounded p-3 text-sm text-slate-800">
          npm run dev
        </pre>
      </section>
    </div>
  );
}
