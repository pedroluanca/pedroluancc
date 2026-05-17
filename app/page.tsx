import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="animate-pulse mb-6">
          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30">
            Sistema Profissional de Currículos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Gerencie currículos de forma{" "}
          <span className="text-blue-500">
            moderna
          </span>{" "}
          e profissional
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mt-8 leading-relaxed">
          Plataforma desenvolvida com Next.js,
          Tailwind CSS, React Hook Form,
          Yup e Sonner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/sistema/paginas/curriculos"
            className="bg-blue-600 hover:bg-blue-500 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20 hover:scale-105"
          >
            Ver Currículos
          </Link>

          <Link
            href="/sistema/paginas/curriculos/novo"
            className="bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105"
          >
            Novo Currículo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full">
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">
              Cadastro Completo
            </h2>

            <p className="text-slate-400">
              Crie currículos completos com
              experiências profissionais e
              upload de imagem.
            </p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">
              Busca Inteligente
            </h2>

            <p className="text-slate-400">
              Pesquise currículos em tempo real
              utilizando filtros rápidos.
            </p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">
              Interface Moderna
            </h2>

            <p className="text-slate-400">
              Visual responsivo, elegante e
              otimizado para qualquer dispositivo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}