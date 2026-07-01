"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * AccessForm — the real capture behind every "Request access" CTA.
 *
 * Submits to Web3Forms (no backend, no account needed — an access key emailed
 * to hello@agentforgeos.ai). Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel to go live.
 * Until then it degrades gracefully to a prefilled mailto — never a dead end,
 * never a silent drop.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const fieldClass =
  "w-full rounded-md border border-border bg-card/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-brand/70 focus:outline-none focus:ring-1 focus:ring-brand/40";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

type Status = "idle" | "submitting" | "success" | "error";

export function AccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", message: "" });
  const [botField, setBotField] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function mailtoFallback() {
    const body = `Name: ${form.name}\nWork email: ${form.email}\nCompany: ${form.company}\nRole / operation: ${form.role}\n\n${form.message}`;
    window.location.href = `mailto:hello@agentforgeos.ai?subject=${encodeURIComponent(
      "AgentForge — access request",
    )}&body=${encodeURIComponent(body)}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (botField) return; // honeypot tripped — silently ignore
    setStatus("submitting");

    if (!WEB3FORMS_KEY) {
      mailtoFallback();
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `AgentForge access request — ${form.name || "unknown"}`,
          from_name: form.name || "AgentForge website",
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          message: form.message,
        }),
      });
      if ((await res.json())?.success) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card/40 p-8 text-center">
        <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full border border-brand/40 bg-brand/[0.06]">
          <Check className="size-5 text-brand" />
        </div>
        <p className="text-lg font-medium text-foreground">Thanks — we&apos;ll be in touch.</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          We read every request personally. If there&apos;s a fit, you&apos;ll hear from a person, not a
          drip campaign.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-xl border border-border bg-card/30 p-6 md:p-8">
      {/* honeypot — visually hidden, off-screen; real people never fill it */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" required value={form.name} onChange={set("name")} className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Work email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={set("email")} className={fieldClass} placeholder="you@company.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" name="company" value={form.company} onChange={set("company")} className={fieldClass} placeholder="Where you operate" />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Your role or operation <span className="font-normal text-muted-foreground">· optional</span>
          </label>
          <input id="role" name="role" value={form.role} onChange={set("role")} className={fieldClass} placeholder="e.g. planning, claims, yard ops" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What would you like to explore? <span className="font-normal text-muted-foreground">· optional</span>
        </label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={set("message")} className={cn(fieldClass, "resize-y")} placeholder="The decision or operation you're weighing AgentForge for." />
      </div>

      {status === "error" && (
        <p className="text-sm text-muted-foreground">
          Something went wrong sending that. You can{" "}
          <button type="button" onClick={mailtoFallback} className="text-brand underline underline-offset-4">
            email us directly
          </button>{" "}
          instead.
        </p>
      )}

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(buttonVariants({ size: "lg" }), "group px-5")}
        >
          {status === "submitting" ? "Sending…" : "Request access"}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-xs text-muted-foreground">No newsletter. Just a conversation.</p>
      </div>
    </form>
  );
}
