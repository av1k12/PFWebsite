export function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 border-t border-white/5 pt-6 text-sm text-[#888888] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs tracking-wide uppercase">
          © {new Date().getFullYear()} Avaneesh Konda
        </p>
        <p>Purdue CS & Mathematics · Built with Next.js</p>
      </div>
    </footer>
  );
}
