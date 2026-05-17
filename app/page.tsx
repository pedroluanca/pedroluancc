import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Sistema de Gestão de Currículos
        </h1>

        <p className="text-slate-300 text-lg mb-8">
          Plataforma desenvolvida com Next.js,
          Tailwind CSS, React Hook Form,
          Yup e Sonner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sistema/paginas/curriculos"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition"
          >
            Ver Currículos
          </Link>

          <Link
            href="/sistema/paginas/curriculos/novo"
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold transition"
          >
            Novo Currículo
          </Link>
        </div>
      </div>
    </main>
  );
}