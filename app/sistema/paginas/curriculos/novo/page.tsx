"use client";

import Image from "next/image";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

const schema = yup.object({
  nome: yup.string().required("Nome obrigatório"),

  email: yup
    .string()
    .email("Email inválido")
    .required("Email obrigatório"),

  cargo: yup.string().required("Cargo obrigatório"),

  cpf: yup.string().required("CPF obrigatório"),

  telefone: yup.string().required("Telefone obrigatório"),

  resumo: yup
    .string()
    .min(10, "Resumo muito curto")
    .required("Resumo obrigatório"),

  experiencias: yup.array().of(
    yup.object({
      empresa: yup.string().required(),
      cargo: yup.string().required(),
    })
  ),
});

export default function NovoCurriculoPage() {
  const [imagem, setImagem] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      experiencias: [
        {
          empresa: "",
          cargo: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiencias",
  });

  const onSubmit = (data: any) => {
    try {
      const curriculosExistentes = JSON.parse(
        localStorage.getItem("curriculos") || "[]"
      );

      const novoCurriculo = {
        id: Date.now(),
        imagem,
        ...data,
      };

      curriculosExistentes.push(novoCurriculo);

      localStorage.setItem(
        "curriculos",
        JSON.stringify(curriculosExistentes)
      );

      toast.success("Currículo cadastrado com sucesso!");

      reset();

      setImagem(null);
    } catch (error) {
      console.log(error);

      toast.error("Erro ao salvar currículo");
    }
  };

  function handleImagem(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setImagem(imageUrl);
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-3xl text-white font-bold mb-6">
        Novo Currículo
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 text-white p-6 rounded-xl shadow space-y-4 max-w-2xl"
      >
        <div className="flex flex-col items-center gap-4">
          {imagem && (
            <Image
              src={imagem}
              alt="Preview"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImagem}
            className="w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Nome"
          {...register("nome")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.nome?.message}
        </p>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.email?.message}
        </p>

        <input
          type="text"
          placeholder="Cargo desejado"
          {...register("cargo")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.cargo?.message}
        </p>

        <input
          type="text"
          placeholder="CPF"
          {...register("cpf")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.cpf?.message}
        </p>

        <input
          type="text"
          placeholder="Telefone"
          {...register("telefone")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.telefone?.message}
        </p>

        <textarea
          placeholder="Resumo profissional"
          {...register("resumo")}
          className="w-full border p-3 rounded-xl bg-slate-700"
        />

        <p className="text-red-400 text-sm">
          {errors.resumo?.message}
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            Experiências Profissionais
          </h2>

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-slate-600 p-4 rounded-xl space-y-3"
            >
              <input
                type="text"
                placeholder="Empresa"
                {...register(`experiencias.${index}.empresa`)}
                className="w-full border p-3 rounded-xl bg-slate-700"
              />

              <input
                type="text"
                placeholder="Cargo"
                {...register(`experiencias.${index}.cargo`)}
                className="w-full border p-3 rounded-xl bg-slate-700"
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Remover
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              append({
                empresa: "",
                cargo: "",
              })
            }
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            Adicionar Experiência
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-slate-950 text-white px-6 py-3 rounded-xl hover:bg-slate-700"
        >
          Salvar Currículo
        </button>
      </form>
    </main>
  );
}