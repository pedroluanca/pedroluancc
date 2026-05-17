const curriculos = [
  {
    id: "1",
    nome: "Pedro Silva",
    cargo: "Desenvolvedor Front-End",
    email: "pedro@email.com",
    telefone: "(47) 99999-9999",
    resumo: "Experiência com React, Next.js e Tailwind.",
  },
  {
    id: "2",
    nome: "Maria Souza",
    cargo: "Designer UX/UI",
    email: "maria@email.com",
    telefone: "(11) 98888-8888",
    resumo: "Especialista em interfaces modernas.",
  },
];

export default async function CurriculoDetalhes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const curriculo = curriculos.find(
    (item) => item.id === id
  );

  if (!curriculo) {
    return (
      <main className="min-h-screen bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          Currículo não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <div className="bg-slate-800 p-6 rounded-xl max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">
          {curriculo.nome}
        </h1>

        <p className="mb-2">
          <strong>Cargo:</strong> {curriculo.cargo}
        </p>

        <p className="mb-2">
          <strong>Email:</strong> {curriculo.email}
        </p>

        <p className="mb-2">
          <strong>Telefone:</strong> {curriculo.telefone}
        </p>

        <p className="mt-4">
          <strong>Resumo:</strong> {curriculo.resumo}
        </p>
      </div>
    </main>
  );
}