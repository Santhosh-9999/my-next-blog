export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>© {new Date().getFullYear()} My Next Blog</span>
          <nav className="space-x-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/profile" className="hover:underline">
              Profile
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
