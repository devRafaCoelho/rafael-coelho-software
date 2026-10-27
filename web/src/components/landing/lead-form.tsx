"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BudgetSelect } from "@/components/landing/budget-select";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { formatWhatsapp, leadSchema, type Lead } from "@/lib/lead";

const fieldClass =
  "h-11 w-full rounded-xl border border-white/10 bg-prompt-blue-light/60 px-3 text-base text-foreground outline-none transition-colors placeholder:text-subtle/70 focus:border-ai-green/60";

export function LeadForm() {
  const {
    register,
    control,
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
  const router = useRouter();
  const [sendError, setSendError] = useState<string | null>(null);
  const { onChange: onWhatsappChange, ...whatsappField } = register("whatsapp");

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      noValidate
      onSubmit={handleSubmit(async (values) => {
        setSendError(null);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }).catch(() => null);
        if (!response?.ok) {
          setSendError(
            "Não foi possível enviar. Tente de novo ou fale no WhatsApp.",
          );
          return;
        }
        track({ event: "generate_lead" });
        router.push("/obrigado");
      })}
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
        <input
          className={fieldClass}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(71) 99999-9999"
          {...whatsappField}
          onChange={(event) => {
            event.target.value = formatWhatsapp(event.target.value);
            void onWhatsappChange(event);
          }}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm sm:col-span-2">
        Mensagem
        <textarea
          className="min-h-28 w-full rounded-xl border border-white/10 bg-prompt-blue-light/60 px-3 py-2 text-base text-foreground outline-none transition-colors focus:border-ai-green/60"
          {...register("message")}
        />
      </label>
      <div className="flex flex-col gap-1 text-sm sm:col-span-2">
        <span>Faixa de orçamento</span>
        <Controller
          name="budget"
          control={control}
          render={({ field }) => (
            <BudgetSelect
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
      <Controller
        name="consent"
        control={control}
        render={({ field }) => (
          <label className="flex cursor-pointer items-center gap-2 text-sm sm:col-span-2">
            <span className="relative inline-flex size-4 shrink-0">
              <input
                type="checkbox"
                className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
                checked={Boolean(field.value)}
                onChange={(event) => field.onChange(event.target.checked)}
                onBlur={field.onBlur}
                ref={field.ref}
                name={field.name}
              />
              <span
                aria-hidden
                className="pointer-events-none flex size-4 items-center justify-center rounded border border-white/25 bg-prompt-blue-light peer-checked:border-ai-green peer-checked:bg-ai-green peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ai-green"
              >
                <svg
                  viewBox="0 0 16 16"
                  className={`size-3.5 text-prompt-blue ${field.value ? "opacity-100" : "opacity-0"}`}
                  fill="currentColor"
                >
                  <path d="M6.5 11.2 3.2 7.9l1.1-1.1 2.2 2.2 5-5.1 1.1 1.1z" />
                </svg>
              </span>
            </span>
            Concordo em ser contatado sobre este pedido.
          </label>
        )}
      />
      <a
        href="/privacidade"
        className="text-sm text-subtle underline underline-offset-4 transition-colors hover:text-foreground sm:col-span-2"
      >
        Política de privacidade
      </a>
      {sendError ? (
        <p className="text-sm text-destructive sm:col-span-2">{sendError}</p>
      ) : null}
      <Button
        type="submit"
        disabled={!consent}
        className="glow-green h-12 w-full border sm:w-fit border-ai-green/50 bg-ai-green px-6 text-sm font-semibold text-prompt-blue hover:bg-ai-green/90 sm:col-span-2"
      >
        Enviar
      </Button>
    </form>
  );
}
