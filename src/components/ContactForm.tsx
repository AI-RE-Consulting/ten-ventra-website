import { contactPage } from "@/content/content";
import Button from "./Button";

export default function ContactForm() {
  const { form } = contactPage;

  return (
    <div className="rounded-xl border border-border-light bg-surface p-8">
      <h3 className="text-xl font-semibold">{form.heading}</h3>
      <form className="mt-6 space-y-5">
        {form.fields.map((field) => (
          <div key={field}>
            <label className="mb-1.5 block text-sm font-medium text-text-body">
              {field}
            </label>
            {field === "Message" ? (
              <textarea
                placeholder={`Your ${field.toLowerCase()}...`}
                rows={5}
                className="w-full rounded-lg border border-border-light bg-background px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-accent"
              />
            ) : (
              <input
                type={field === "Email Address" ? "email" : "text"}
                placeholder={`Your ${field.toLowerCase()}...`}
                className="w-full rounded-lg border border-border-light bg-background px-4 py-3 text-sm text-text-heading outline-none transition-colors focus:border-accent"
              />
            )}
          </div>
        ))}
        <Button type="submit" variant="filled" className="w-full text-center">
          {form.submitLabel}
        </Button>
        <p className="text-center text-xs text-text-muted">{form.note}</p>
      </form>
    </div>
  );
}
