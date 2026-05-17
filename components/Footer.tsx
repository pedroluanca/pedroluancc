export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">
            CurrículoPRO
          </h2>

          <p className="text-slate-400 mt-2">
            Sistema profissional de gestão
            de currículos.
          </p>
        </div>

        <div className="text-slate-500 text-sm">
          © 2026 Pedro — Next.js +
          Tailwind CSS
        </div>
      </div>
    </footer>
  );
}