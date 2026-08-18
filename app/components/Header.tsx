"use client";

import { usePathname } from "next/navigation";

type Variant = "default" | "posts" | "post";

export default function Header({ variant }: { variant?: Variant }) {
  const pathname = usePathname() ?? "/";
  let resolved: Variant = variant ?? "default";
  if (!variant) {
    if (pathname === "/posts") resolved = "posts";
    else if (pathname.startsWith("/posts/")) resolved = "post";
  }

  const bg =
    resolved === "posts" ? "bg-indigo-600 text-white" : resolved === "post" ? "bg-white border-b" : "bg-white";
  const titleColor = resolved === "posts" ? "text-white" : "text-slate-900";

  return (
    <header className={`${bg} w-full`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="/" className={`text-lg font-bold ${titleColor}`}>
            My Next Blog
          </a>
          <nav className="space-x-4">
            <a href="/about" className={`text-sm font-medium ${titleColor} hover:underline`}>
              About
            </a>
            <a href="/profile" className={`text-sm font-medium ${titleColor} hover:underline`}>
              Profile
            </a>
            <a href="/posts" className={`text-sm font-medium ${titleColor} hover:underline`}>
              Posts
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
