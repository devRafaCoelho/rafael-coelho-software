"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { budgetBands, leadSchema, type Lead } from "@/lib/lead";

const fieldClass = "h-10 border border-foreground/20 bg-background px-2";

export function LeadForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      whatsapp: "",
      message: "",
      consent: false as unknown as true,
    },
  });
  const consent = watch("consent");

  return (
    <form
      className="flex flex-col gap-3"
      noValidate
      onSubmit={handleSubmit(() => undefined)}
    >
      <label className="flex flex-col gap-1 text-sm">
        Nome
        <input className={fieldClass} {...register("name")} />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Empresa
        <input className={fieldClass} {...register("company")} />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        E-mail
        <input className={fieldClass} type="email" {...register("email")} />
        {errors.email ? (
          <span className="text-sm text-destructive">E-mail inválido</span>
        ) : null}
      </label>
      <label className="flex flex-col gap-1 text-sm">
        WhatsApp
        <input className={fieldClass} {...register("whatsapp")} />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Mensagem
        <textarea
          className="min-h-24 border border-foreground/20 bg-background px-2 py-2"
          {...register("message")}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        Faixa de orçamento
        <select className={fieldClass} defaultValue="" {...register("budget")}>
          <option value="" disabled>
            Faixa de orçamento
          </option>
          {budgetBands.map((band) => (
            <option key={band} value={band}>
              {band}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" className="mt-1" {...register("consent")} />
        Concordo em ser contatado sobre este pedido.
      </label>
      <Button
        type="submit"
        disabled={!consent}
        className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
      >
        Enviar
      </Button>
    </form>
  );
}
