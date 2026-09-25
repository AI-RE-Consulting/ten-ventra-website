// mailto: link that opens the visitor's mail app with a prefilled draft (RFC 6068).
// encodeURIComponent writes spaces as %20; a "+" would show up literally in Apple Mail.
export function mailtoHref(to: string, draft: { subject: string; body: readonly string[] }): string {
  const subject = encodeURIComponent(draft.subject);
  const body = encodeURIComponent(draft.body.join("\r\n"));
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
