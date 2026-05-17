"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CurriculosPage() {
  const [curriculos, setCurriculos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    carregarCurriculos();
  }, []);

  function carregarCurriculos() {
    const dados = JSON.parse(
      localStorage.getItem("curriculos") || "[]"
    );

    setCurriculos(dados);
  }

  function excluirCurriculo(id: number) {
    const novaLista = curriculos.filter(
      (curriculo) => curriculo.id !== id
    );

    localStorage.setItem(
      "curriculos",
      JSON.stringify(novaLista)
    );

    setCurriculos(novaLista);

    toast.success("Currículo removido!");
  }

  const curriculosFiltrados = curriculos.filter((curriculo) =>
    curriculo.nome
      ?.toLowerCase()
      .includes(busca.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-3xl text-white font-bold mb-6">
        Lista de Currículos
      </h1>

      <input
        type="text"
        placeholder="Buscar currículo..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full max-w-xl p-3 rounded-xl bg-slate-800 text-white border border-slate-700 mb-6"
      />

      <div className="grid gap-4">
        {curriculosFiltrados.length === 0 && (
          <div className="bg-slate-800 text-white p-6 rounded-xl">
            Nenhum currículo encontrado.
          </div>
        )}

        {curriculosFiltrados.map((curriculo) => (
          <div
            key={curriculo.id}
            className="bg-slate-800 text-white p-5 rounded-xl shadow"
          >
            <Link
              href={`/sistema/paginas/curriculos/${curriculo.id}`}
              className="block hover:opacity-80"
            >
              <h2 className="text-2xl font-bold">
                {curriculo.nome}
              </h2>

              <p className="text-slate-300 mt-2">
                {curriculo.cargo}
              </p>

              <p className="text-slate-400 mt-2">
                {curriculo.email}
              </p>
            </Link>

            <button
              onClick={() =>
                excluirCurriculo(curriculo.id)
              }
              className="mt-4 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}