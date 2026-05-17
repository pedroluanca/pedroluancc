"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function CurriculoDetalhes({
  params,
}: Props) {
  const [curriculo, setCurriculo] = useState<any>(null);

  useEffect(() => {
    async function carregarCurriculo() {
      const { id } = await params;

      const curriculos = JSON.parse(
        localStorage.getItem("curriculos") || "[]"
      );

      const encontrado = curriculos.find(
        (item: any) => String(item.id) === id
      );

      setCurriculo(encontrado);
    }

    carregarCurriculo();
  }, [params]);

  if (!curriculo) {
    return (
      <main className="min-h-screen bg-slate-900 text-white p-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h1 className="text-3xl font-bold">
            Currículo não encontrado
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <div className="bg-slate-800 p-6 rounded-xl max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-6">
          {curriculo.imagem && (
            <Image
              src={curriculo.imagem}
              alt={curriculo.nome}
              width={120}
              height={120}
              className="rounded-full object-cover mb-4"
            />
          )}

          <h1 className="text-4xl font-bold">
            {curriculo.nome}
          </h1>

          <p className="text-slate-300 mt-2">
            {curriculo.cargo}
          </p>
        </div>

        <div className="space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            {curriculo.email}
          </p>

          <p>
            <strong>Telefone:</strong>{" "}
            {curriculo.telefone}
          </p>

          <p>
            <strong>CPF:</strong>{" "}
            {curriculo.cpf}
          </p>

          <div>
            <strong>Resumo:</strong>

            <p className="text-slate-300 mt-2">
              {curriculo.resumo}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Experiências Profissionais
          </h2>

          <div className="space-y-4">
            {curriculo.experiencias?.map(
              (experiencia: any, index: number) => (
                <div
                  key={index}
                  className="bg-slate-700 p-4 rounded-xl"
                >
                  <p>
                    <strong>Empresa:</strong>{" "}
                    {experiencia.empresa}
                  </p>

                  <p className="mt-2">
                    <strong>Cargo:</strong>{" "}
                    {experiencia.cargo}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}