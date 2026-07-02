"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-card border border-bone bg-white px-4 py-3 text-body text-black placeholder:text-graphite/60 focus:border-navy focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "No se pudo enviar el mensaje."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-bone bg-bone/40 p-md text-center">
        <p className="text-h4 text-black">Mensaje enviado</p>
        <p className="mt-2 text-body text-graphite">
          Te respondemos en menos de 24h. Gracias por escribirnos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-ui text-graphite">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputClasses}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-ui text-graphite">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClasses}
          placeholder="tu@empresa.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-ui text-graphite">
          Empresa
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={inputClasses}
          placeholder="Nombre de tu empresa (opcional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-ui text-graphite">
          Cuéntanos tu problema
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClasses}
          placeholder="¿Qué te gustaría resolver con tus datos?"
        />
      </div>

      {status === "error" && (
        <p className="text-ui text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-card bg-navy px-7 py-3.5 text-ui font-medium text-white transition-colors hover:bg-navy-hover disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
