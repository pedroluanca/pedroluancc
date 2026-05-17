import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black text-white"
        >
          Currículo<span className="text-blue-500">PRO</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="text-slate-300 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/sistema/paginas/curriculos"
            className="text-slate-300 hover:text-white transition"
          >
            Currículos
          </Link>

          <Link
            href="/sistema/paginas/curriculos/novo"
            className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-xl text-white font-medium"
          >
            Novo
          </Link>
        </nav>
      </div>
    </header>
  );
}