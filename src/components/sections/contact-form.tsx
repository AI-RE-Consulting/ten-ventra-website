"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_RE } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !EMAIL_RE.test(payload.email) ||
      payload.message.length < 10
    ) {
      setStatus({
        kind: "error",
        message: "Please complete every field. Messages must be at least 10 characters.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Request failed");
      }
      setStatus({ kind: "success" });
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <p role="status" className="text-sm text-muted-foreground">
        Thanks — we&apos;ll be in touch.
      </p>
    );
  }

  const isSubmitting = status.kind === "submitting";
  const isError = status.kind === "error";
  const fieldClass =
    "w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Name"
        required
        aria-invalid={isError}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        required
        aria-invalid={isError}
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-company">
        Company
      </label>
      <input
        id="contact-company"
        name="company"
        type="text"
        autoComplete="organization"
        placeholder="Company (optional)"
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Message"
        required
        minLength={10}
        rows={5}
        aria-invalid={isError}
        className={`${fieldClass} resize-vertical min-h-[140px]`}
      />

      {status.kind === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md transition-all hover:bg-primary/90 hover:ring-2 hover:ring-red-600/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
