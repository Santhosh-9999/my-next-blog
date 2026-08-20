import fetchPosts from "../../lib/fetchPosts";
import Link from "next/link";

export default async function ListPosts() {
  let posts = [];
  let error: string | null = null;
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("2 seconds later");
    }, 2000);
  });
  try {
    posts = await fetchPosts(`https://jsonplaceholder.typicode.com/posts`);
  } catch (err: any) {
    error = err?.message ?? "Failed to load posts.";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">List of Posts</h1>

      {error ? (
        <div className="rounded-md bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          {error}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-slate-600">No posts available.</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li
              className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 ease-in-out group"
              key={post.id}
            >
              <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md mb-3 tracking-wide uppercase">
                Post #{post.id}
              </span>
              <Link href={`/posts/${post.id}`} className="block">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-150 capitalize mb-2">
                  {post.title}
                </h2>
              </Link>

              <p className="text-slate-600 text-sm leading-relaxed first-letter:capitalize">
                {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
